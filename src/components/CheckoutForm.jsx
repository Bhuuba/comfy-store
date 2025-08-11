/* eslint-disable no-constant-condition */
/* eslint-disable react-refresh/only-export-components */
import { Form, redirect } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Button,
} from "./ui";
import { customFetch, formatPrice } from "../utils";
import { toast } from "sonner";
import { clearCart } from "../features/cart/cartSlice";

export const action =
  (store, queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      queryClient.removeQueries(["orders"]);
      store.dispatch(clearCart());
      toast.success("Замовлення успішно оформлено");
      return redirect("/orders");
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "Виникла помилка при оформленні замовлення";
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect("/login");
      return null;
    }
  };

const CheckoutForm = () => {
  return (
    <Card className="max-w-lg w-full shadow-lg">
      <CardHeader>
        <CardTitle>Інформація для доставки</CardTitle>
      </CardHeader>
      <CardContent>
        <Form method="POST" className="space-y-4">
          <div>
            <Input id="name" name="name" type="text" placeholder="Ваше ім'я" />
          </div>
          <div>
            <Input
              id="address"
              name="address"
              type="text"
              placeholder="Ваша адреса"
            />
          </div>
          <Button type="submit" className="w-full">
            Оформити замовлення
          </Button>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CheckoutForm;
