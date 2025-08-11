import { useLoaderData } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui";

const OrdersList = () => {
  const { orders, meta } = useLoaderData();

  return (
    <div className="mt-8">
      <h4 className="mb-4 text-lg font-semibold">
        Всього замовлень: {meta.pagination.total}
      </h4>

      <div className="overflow-x-auto rounded-lg border border-muted">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ім'я</TableHead>
              <TableHead>Адреса</TableHead>
              <TableHead>Кількість товарів</TableHead>
              <TableHead>Сума</TableHead>
              <TableHead className="hidden sm:table-cell">Дата</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {orders.map((order) => {
              const id = order.id;
              const { name, address, numItemsInCart, orderTotal, createdAt } =
                order.attributes;
              const date = new Date(createdAt).toLocaleDateString("uk-UA", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              });
              return (
                <TableRow key={id} className="hover:bg-muted/50">
                  <TableCell>{name}</TableCell>
                  <TableCell>{address}</TableCell>
                  <TableCell>{numItemsInCart}</TableCell>
                  <TableCell>{orderTotal}</TableCell>
                  <TableCell className="hidden sm:table-cell">{date}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OrdersList;
