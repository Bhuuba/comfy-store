import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Button,
  Separator,
} from "../components/ui";
import { CartItemsList, SectionTitle, CartTotals } from "../components";

const Cart = () => {
  const user = null;
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  if (numItemsInCart === 0) {
    return (
      <Card className="max-w-lg mx-auto mt-12 p-6">
        <CardHeader>
          <CardTitle className="text-center text-lg font-semibold">
            Your cart is empty 🛒
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex justify-center">
          <Link to="/" className="w-full">
            <Button className="w-full" variant="default">
              Go Shopping
            </Button>
          </Link>
        </CardFooter>
      </Card>
    );
  }

  return (
    <div className="container mx-auto mt-8 grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-8">
        <Card>
          <CardHeader>
            <CardTitle>Shopping Cart</CardTitle>
          </CardHeader>
          <CardContent>
            <CartItemsList />
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-4">
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <CartTotals />
          </CardContent>
          <Separator className="my-4" />
          <CardFooter>
            {user ? (
              <Link to="/checkout" className="w-full">
                <Button className="w-full">Proceed to checkout</Button>
              </Link>
            ) : (
              <Link to="/login" className="w-full">
                <Button className="w-full">Please login</Button>
              </Link>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
