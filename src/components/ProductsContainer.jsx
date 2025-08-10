import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ProductsGrid, ProductsList, Button } from "./index";
import { BsFillGridFill, BsList } from "react-icons/bs";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState("grid");

  const setActiveStyles = (pattern) => {
    return pattern === layout
      ? "bg-primary text-primary-foreground"
      : "bg-muted text-muted-foreground hover:bg-accent";
  };

  return (
    <>
      {/* HEADER */}
      <div className="mt-8 mb-6 flex items-center justify-between border-b border-border pb-4">
        <h4 className="text-sm font-medium text-muted-foreground">
          {totalProducts} product{totalProducts !== 1 && "s"}
        </h4>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className={setActiveStyles("grid")}
            onClick={() => setLayout("grid")}
          >
            <BsFillGridFill className="text-lg" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={setActiveStyles("list")}
            onClick={() => setLayout("list")}
          >
            <BsList className="text-lg" />
          </Button>
        </div>
      </div>

      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className="mt-16 text-xl font-medium text-muted-foreground">
            Sorry, no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
