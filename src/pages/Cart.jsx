import { useSelector } from "react-redux";
import { SectionTitle, CartItemsList, CartTotals } from "../components";
import { Link } from "react-router-dom";

const Cart = () => {
  const user = useSelector(state=>state.userState.user);
  const numsItemsInCart = useSelector(
    (state) => state.cartState.numsItemsInCart
  );

  if (numsItemsInCart === 0) {
    return <SectionTitle text="Your Cart is empty." />;
  }

  return (
    <>
      <SectionTitle text="shopping cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className=" lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link
              to="/checkout"
              className="uppercase btn btn-primary mt-8 w-full"
            >
              proceed to checkout
            </Link>
          ) : (
            <Link to="/login" className="uppercase btn btn-primary mt-8 w-full">
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
