import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import {
  OrdersList,
  ComplexPaginationContainer,
  SectionTitle,
} from "../components";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui";

const ordersQuery = (params, user) => {
  return {
    queryKey: [
      "orders",
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user;

    if (!user) {
      toast.warn("Потрібно увійти, щоб переглянути замовлення");
      return redirect("/login");
    }

    const params = Object.fromEntries(
      new URL(request.url).searchParams.entries()
    );

    try {
      const response = await queryClient.ensureQueryData(
        ordersQuery(params, user)
      );

      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      console.error(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "Сталася помилка при завантаженні замовлень";

      toast.error(errorMessage);

      if (error?.response?.status === 401 || error?.response?.status === 403) {
        return redirect("/login");
      }
      return null;
    }
  };

const Orders = () => {
  const { orders, meta } = useLoaderData();

  if (!meta?.pagination || meta.pagination.total < 1) {
    return <SectionTitle text="Будь ласка, зробіть замовлення" />;
  }

  return (
    <section className="space-y-6 mt-6">
      <Card>
        <CardHeader>
          <CardTitle>Ваші замовлення</CardTitle>
        </CardHeader>
        <CardContent>
          <OrdersList orders={orders} />
          <div className="mt-6">
            <ComplexPaginationContainer meta={meta} />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Orders;
