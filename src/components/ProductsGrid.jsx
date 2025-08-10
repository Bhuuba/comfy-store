import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";
const ProductsGrid = () => {
  const { products } = useLoaderData();

  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-12">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const dollarsAmount = formatPrice(price);

        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="group rounded-xl border bg-background shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="overflow-hidden">
              <img
                src={image}
                alt={title}
                className="h-64 md:h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 text-center space-y-2">
              <h2 className="text-lg font-semibold tracking-wide capitalize">
                {title}
              </h2>
              <p className="text-primary font-medium text-base">
                {dollarsAmount}
              </p>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default ProductsGrid;
