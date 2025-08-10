import { formatPrice, generateAmountOptions } from "../utils";
import { removeItem, editItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import {
  Card,
  CardContent,
  Button,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Badge,
} from "../components/ui";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;

  const removeItemFromTheCart = () => {
    dispatch(removeItem(cartID));
  };

  const handleAmount = (value) => {
    dispatch(editItem({ cartID, amount: parseInt(value) }));
  };

  return (
    <Card className="mb-6">
      <CardContent className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="h-24 w-24 rounded-md sm:h-32 sm:w-32 object-cover"
        />

        {/* INFO */}
        <div className="flex flex-col sm:w-48">
          <h3 className="capitalize font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{company}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm">Color:</span>
            <Badge
              style={{ backgroundColor: productColor }}
              className="w-4 h-4 p-0"
            />
          </div>
        </div>

        {/* SELECT + REMOVE */}
        <div className="flex flex-col gap-2 sm:ml-6">
          <Select value={String(amount)} onValueChange={handleAmount}>
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {generateAmountOptions(amount + 5).map((opt) => (
                <SelectItem key={opt} value={String(opt)}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            variant="link"
            className="text-red-500 p-0 h-auto"
            onClick={removeItemFromTheCart}
          >
            Remove
          </Button>
        </div>

        {/* PRICE */}
        <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
      </CardContent>
    </Card>
  );
};

export default CartItem;
