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
        label="Search product"
        name="search"
        defaultValue={search}
        className="h-8"
      />
      {/* CATEGORIES */}
      <FormSelect
        label="Select category"
        name="category"
        list={meta.categories}
        defaultValue={category}
        size="select-sm"
      />
      {/* COMPANIES */}
      <FormSelect
        label="Select company"
        name="company"
        list={meta.companies}
        defaultValue={company}
        size="select-sm"
      />
      {/* ORDER */}
      <FormSelect
        label="Sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        defaultValue={order}
        size="select-sm"
      />
      {/* PRICE */}
      <FormRange
        label="Select price"
        name="price"
        price={price}
        size="range-sm"
      />
      {/* SHIPPING */}
      <FormCheckbox
        label="Free shipping"
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
        Search
      </Button>
      <Link to="/products" className="w-full sm:w-auto">
        <Button variant="secondary" size="sm" className="w-full sm:w-auto">
          Reset
        </Button>
      </Link>
    </Form>
  );
};

export default Filters;
