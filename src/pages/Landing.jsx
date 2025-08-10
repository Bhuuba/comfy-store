import { Hero, FeaturedProducts } from "../components";
import { customFetch } from "../utils";

const url = "/products?featured=true";
// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  return { products };
};
const Landing = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
};

export default Landing;
