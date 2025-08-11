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
  const { user } = useSelector((state) => state.userState);
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  if (numItemsInCart === 0) {
    return (
      <Card className="max-w-lg mx-auto mt-12 p-6">
        <CardHeader>
          <CardTitle className="text-center text-lg font-semibold">
            Ваш кошик порожній 🛒
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex justify-center">
          <Link to="/" className="w-full">
            <Button className="w-full" variant="default">
              Перейти до покупок
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
            <CardTitle>Кошик покупок</CardTitle>
          </CardHeader>
          <CardContent>
            <CartItemsList />
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-4">
        <Card>
          <CardHeader>
            <CardTitle>Підсумок замовлення</CardTitle>
          </CardHeader>
          <CardContent>
            <CartTotals />
          </CardContent>
          <Separator className="my-4" />
          <CardFooter>
            {user ? (
              <Link to="/checkout" className="w-full">
                <Button className="w-full">Оформити замовлення</Button>
              </Link>
            ) : (
              <Link to="/login" className="w-full">
                <Button className="w-full">Увійдіть в обліковий запис</Button>
              </Link>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
