import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice, generateAmountOptions } from "../utiles";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import { addItem } from "../features/CartSlice";

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  // console.log(response.data.data);
  const product = response.data.data;
  return { product };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { title, image, company, price, description, colors } =
    product.attributes;
  const dollarsAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const cartProduct = {
    cartID: product.id+productColor,
    productID:product.id,
    title,image,company,price,amount,productColor
  }

  const dispatch = useDispatch()
  const addItemToCart = () => {
    dispatch(addItem({product:cartProduct}))
  }

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="h-96 w-96 object-cover lg:w-full rounded-lg"
        />
        {/* PRODUCT INFO */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="mt-2 text-xl font-bold text-neutral-content">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* COLORS */}
          <div className="mt-6">
            <h4 className=" font-medium tracking-wider">Colors</h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    // className="badge h-6 w-6 border-2 border-secondary"
                    className={`badge h-6 w-6 ${
                      color === productColor && "border-2 border-secondary"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          {/* AMOUNT */}
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="amount">
              <h4 className=" font-medium tracking-wider">Amount</h4>
            </label>
            <select
              id="amount"
              value={amount}
              className="select select-secondary select-bordered"
              onChange={handleAmount}
            >
              {generateAmountOptions(20)}
            </select>
          </div>
          {/* CART BUTTON */}
          <div className="mt-10">
            <button className="btn btn-secondary" onClick={addItemToCart}>Add To Bag</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
