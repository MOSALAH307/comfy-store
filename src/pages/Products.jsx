import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utiles";

export const loader = async ({ request }) => {
  // console.log(request.url);
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  // console.log(params);
  const response = await customFetch("/products", { params });
  // console.log(response.data);
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
