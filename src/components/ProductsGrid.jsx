import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utiles";

const ProductsGrid = () => {
  const {products} = useLoaderData();
  // console.log(products);
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, image, price } = product.attributes;
        const dollarsAmount = formatPrice(price)
        return (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="h-64 w-full md:h-48 object-cover rounded-xl"
              />
            </figure>
            <div className="card-body items-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className=" text-secondary">{dollarsAmount}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsGrid;