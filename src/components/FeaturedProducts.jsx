import { ProductsGrid, SectionTitle } from "./index";

const FeaturedProducts = () => {
  return (
    <div className="pt-24">
      <SectionTitle text="Популярні товари" />
      <ProductsGrid />
    </div>
  );
};
export default FeaturedProducts;
