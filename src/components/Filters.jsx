import { FormInput, FormSelect, FormRange, FormCheckbox } from "./index";
import { Form, Link, useLoaderData } from "react-router-dom";
import { Button } from "./ui";

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;

  return (
    <Form className="bg-muted/30 rounded-lg px-6 py-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center border border-gray-300/20 shadow-sm">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="Пошук товару"
        name="search"
        defaultValue={search}
        className="h-8"
      />
      {/* CATEGORIES */}
      <FormSelect
        label="Оберіть категорію"
        name="category"
        list={meta.categories}
        defaultValue={category}
        size="select-sm"
      />
      {/* COMPANIES */}
      <FormSelect
        label="Оберіть виробника"
        name="company"
        list={meta.companies}
        defaultValue={company}
        size="select-sm"
      />
      {/* ORDER */}
      <FormSelect
        label="Сортувати за"
        name="order"
        list={["а-я", "я-а", "дорогі", "дешеві"]}
        defaultValue={order}
        size="select-sm"
      />
      {/* PRICE */}
      <FormRange
        label="Оберіть ціну"
        name="price"
        price={price}
        size="range-sm"
      />
      {/* SHIPPING */}
      <FormCheckbox
        label="Безкоштовна доставка"
        name="shipping"
        defaultValue={shipping}
        size="checkbox-sm"
      />
      {/* BUTTONS */}
      <Button
        type="submit"
        variant="default"
        size="sm"
        className="w-full sm:w-auto"
      >
        Пошук
      </Button>
      <Link to="/products" className="w-full sm:w-auto">
        <Button variant="secondary" size="sm" className="w-full sm:w-auto">
          Скинути
        </Button>
      </Link>
    </Form>
  );
};

export default Filters;
