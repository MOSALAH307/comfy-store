import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { customFetch } from "../utiles";
import { toast } from "react-toastify";
import { loginUser } from "../features/UserSlice";
import { useDispatch } from "react-redux";

//login action
export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    // console.log(data);
    try {
      const response = await customFetch.post("/auth/local", data);
      // console.log(response);
      store.dispatch(loginUser(response.data));
      toast.success("logged in successfully");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "Please double check your credentials";
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //Guest User login
  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("Welcome guest user");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("guest user login error.please try later.");
    }
  };

  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 shadow-lg flex flex-col gap-y-4 bg-base-100"
      >
        <h4 className="text-3xl capitalize font-bold text-center">login</h4>
        <FormInput type="email" label="email" name="identifier" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="Login" type="submit" />
        </div>
        <button
          type="button"
          className="btn btn-secondary capitalize"
          onClick={loginAsGuestUser}
        >
          guest user
        </button>
        <p className="text-center">
          Not a member yet ?
          <Link
            to="/register"
            className="ml-3 capitalize link-hover link-primary"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
