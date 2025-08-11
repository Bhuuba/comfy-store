/* eslint-disable react-refresh/only-export-components */
import { useSelector } from "react-redux";
import { CartTotals, CheckoutForm, SectionTitle } from "../components";
import { toast } from "sonner";
import { redirect } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Alert,
  AlertDescription,
} from "../components/ui";
export const loader = (store) => () => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.warn("You must be logged in to checkout");
    return redirect("/login");
  }
  return null;
};

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }

  if (cartTotal.length === 0) {
    return (
      <Alert variant="destructive" className="mt-6">
        <AlertDescription>Ваш кошик порожній</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
      <Card>
        <CardHeader>
          <CardTitle>Оформлення замовлення</CardTitle>
        </CardHeader>
        <CardContent>
          <CheckoutForm />
          <Alert variant="info" className="mt-4">
            <AlertDescription>
              Будь ласка, перевірте ваші дані перед підтвердженням замовлення.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Підсумок замовлення</CardTitle>
        </CardHeader>
        <CardContent>
          <CartTotals />
        </CardContent>
      </Card>
    </div>
  );
};

export default Checkout;
