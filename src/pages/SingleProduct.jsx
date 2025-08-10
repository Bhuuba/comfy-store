/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { formatPrice, customFetch } from "../utils";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import {
  Button,
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "../components/ui";

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  return { product: response.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();

  if (!product || !product.attributes) {
    return <section className="py-8 px-4">Product not found</section>;
  }

  const { image, title, price, description, colors, company } =
    product.attributes;

  const dispatch = useDispatch();

  const [productColor, setProductColor] = useState(
    Array.isArray(colors) && colors.length ? colors[0] : "#000"
  );

  const [amount, setAmount] = useState("1");

  const addToCart = () => {
    const cartProduct = {
      cartID: `${product.id}-${productColor}`,
      productID: product.id,
      image,
      title,
      price,
      amount: Number(amount),
      productColor,
      company,
    };

    dispatch(addItem({ product: cartProduct }));
  };

  return (
    <section className="py-8 px-4">
      {/* breadcrumbs */}
      <div className="text-sm mb-4 text-muted-foreground">
        <Link to="/" className="hover:underline">
          Home
        </Link>{" "}
        /{" "}
        <Link to="/products" className="hover:underline ml-1">
          Products
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* image */}
        <img
          src={image}
          alt={title}
          className="rounded-2xl w-full h-auto object-cover shadow-md"
        />

        {/* product info */}
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
          <p className="text-muted-foreground text-lg mt-1">{company}</p>
          <p className="text-xl font-medium mt-4">{formatPrice(price)}</p>
          <p className="mt-6 leading-7 text-sm text-muted-foreground">
            {description}
          </p>

          {/* colors */}
          <div className="mt-6">
            <h4 className="text-sm font-medium mb-2">Colors</h4>
            <div className="flex items-center gap-2">
              {(Array.isArray(colors) ? colors : []).map((color) => (
                <button
                  key={color}
                  onClick={() => setProductColor(color)}
                  aria-label={`Select color ${color}`}
                  className={`w-6 h-6 rounded-full border transition-all duration-200 ${
                    color === productColor
                      ? "border-2 border-primary shadow"
                      : "border-muted"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* amount */}
          <div className="mt-6 max-w-[150px]">
            <h4 className="text-sm font-medium mb-2">Amount</h4>
            <Select value={amount} onValueChange={setAmount}>
              <SelectTrigger>
                <SelectValue placeholder="1" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 10 }, (_, i) => (
                  <SelectItem key={i + 1} value={String(i + 1)}>
                    {i + 1}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* add to bag */}
          <div className="mt-8">
            <Button onClick={addToCart}>Add to bag</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
