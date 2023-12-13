import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utiles";

const ProductsList = () => {
  const { products } = useLoaderData();
  // console.log(products);
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { title, image, price, company } = product.attributes;
        const dollarsAmount = formatPrice(price);
        return (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="bg-base-100 shadow-xl p-6 sm:p-8 rounded-lg hover:shadow-2xl duration-300 flex flex-col flex-wrap gap-y-4 sm:flex-row group:"
          >
            <img
              src={image}
              alt={title}
              className="h-24 w-24 sm:h-32 sm:w-32 object-cover transition duration-300 group-hover:scale-105 rounded-lg"
            />
            <div className="ml-0 sm:ml-16">
              <h3 className="capitalize text-lg font-medium">{title}</h3>
              <h4 className="capitalize text-base text-neutral-content">
                {company}
              </h4>
            </div>
            <p className="font-medium ml-0 sm:ml-auto text-lg">
              {dollarsAmount}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;
