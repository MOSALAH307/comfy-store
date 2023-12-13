import { useSelector } from "react-redux";
import { formatPrice } from "../utiles";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );
  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/*SUBTOTAL*/}
        <p className="flex justify-between border-b border-base-300 pb-2 capitalize text-xs">
          <span>sub total</span>
          <span className=" font-medium">{formatPrice(cartTotal)}</span>
        </p>
        {/*SHIPPING*/}
        <p className="flex justify-between border-b border-base-300 pb-2 capitalize text-xs">
          <span>shipping</span>
          <span className=" font-medium">{formatPrice(shipping)}</span>
        </p>
        {/*TAX*/}
        <p className="flex justify-between border-b border-base-300 pb-2 capitalize text-xs">
          <span>tax</span>
          <span className=" font-medium">{formatPrice(tax)}</span>
        </p>
        {/*ORDERTOTAL*/}
        <p className=" mt-4 flex justify-between pb-2 capitalize text-xs">
          <span className=" font-bold">sub total</span>
          <span className=" font-bold">{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
};

export default CartTotals;
