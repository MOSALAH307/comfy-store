import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartItemsList = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);
  // console.log(cartItems);
  return (
    <div>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} item={item} />;
      })}
    </div>
  );
};

export default CartItemsList;
