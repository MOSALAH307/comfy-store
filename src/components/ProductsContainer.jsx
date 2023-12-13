import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  // console.log(meta);
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState("grid");
  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-base-content"
    }`;
  };
  return (
    <div>
      {/* HEADER */}
      <div className="flex justify-between mt-8 items-center border-b border-base-300 pb-5">
        <h4 className=" font-medium">
          {totalProducts} product{totalProducts > 1 ? "s" : ""}
        </h4>
        <div className="flex gap-x-2">
          <button
            onClick={() => setLayout("grid")}
            className={setActiveStyles("grid")}
          >
            <BsFillGridFill />
          </button>
          <button>
            <BsList
              onClick={() => setLayout("list")}
              className={setActiveStyles("list")}
            />
          </button>
        </div>
      </div>
      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5>Sorry,No products matched your search...</h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </div>
  );
};

export default ProductsContainer;
