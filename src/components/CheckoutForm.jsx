import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { customFetch, formatPrice } from "../utiles";
import { clearCart } from "../features/CartSlice";
import { toast } from "react-toastify";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const { orderTotal, numsItemsInCart, cartItems } =
      store.getState().cartState;

    const data = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart: numsItemsInCart,
    };
    const user = store.getState().userState.user;

    try {
      const response = await customFetch.post(
        "/orders",
        { data },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      store.dispatch(clearCart());
      toast.success("Order placed successfully");
      return redirect("/orders");
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error placing your order";
      toast.error(errorMessage);
      //if token is missing or invalid
      if (error.response.status === 401 || error.response.status === 403)
        return redirect("/login");
      return null;
    }
  };

const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className=" capitalize font-medium text-xl">shipping information</h4>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="PLACE YOUR ORDER" type="submit" />
      </div>
    </Form>
  );
};

export default CheckoutForm;
