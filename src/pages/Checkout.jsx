import { useSelector } from 'react-redux';
import { SectionTitle, CheckoutForm, CartTotals } from "../components";
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';

export const loader = (store) => async () => {
  const user = store.getState().userState.user
  if (!user) {
    toast.warn("You must be logged in to checkout");
    return redirect('/login')
  }
  return null;
};

const Checkout = () => {
  const cartTotal = useSelector(state => state.cartState.cartTotal)
  
  if (cartTotal === 0) {
    return <SectionTitle text='your cart is empty'/>
  }

  return <>
    <SectionTitle text='place you order' />
    <div className=' mt-8 grid sm:grid-cols-2 gap-8'>
      <CheckoutForm />
      <CartTotals/>
    </div>
  </>
};

export default Checkout;
