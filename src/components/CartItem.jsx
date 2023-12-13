import { useDispatch } from "react-redux";
import { formatPrice, generateAmountOptions } from "../utiles";
import { editItem, removeItem } from "../features/CartSlice";

const CartItem = ({ item }) => {
  const { image, title, company, productColor, amount, price, cartID } = item;
  const dispatch = useDispatch();
  const removeItemFromCart = () => {
    dispatch(removeItem({ cartID }));
  };
  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };
  return (
    <article className="mb-12 flex flex-col gap-y-4 sm:flex-row sm:flex-wrap sm:gap-x-8 border-b pb-6 border-base-300 last:border-b-0">
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 sm:h-32 sm:w-32 object-cover rounded-lg"
      />
      {/* INFO */}
      <div className="sm:ml-16 sm-w-48">
        {/* TITLE */}
        <h3 className=" capitalize font-medium">{title}</h3>
        {/* COMPANY */}
        <h4 className=" capitalize text-sm text-neutral-content">{company}</h4>
        {/* COLOR */}
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color :{" "}
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      {/* AMOUNT*/}
      <div className="sm:ml-12">
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            id="amount"
            name="amount"
            value={amount}
            className="select select-bordered select-xs mt-2"
            onChange={handleAmount}
          >
            {generateAmountOptions(amount + 10)}
          </select>
        </div>
        {/* REMOVE*/}
        <button
          className=" uppercase mt-2 link-hover link-primary text-sm"
          onClick={removeItemFromCart}
        >
          Remove
        </button>
      </div>
      {/* PRICE */}
      <p className=" font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItem;
