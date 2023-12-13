import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Landing,
  Login,
  Register,
  Orders,
  Products,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  HomeLayout,
} from "./pages";
import { ErrorElement } from "./components";
//loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as productsLoader } from "./pages/Products";
import { loader as checkoutLoader } from "./pages/Checkout";
import { loader as ordersLoader } from "./pages/Orders";
//actions
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as checkoutAction } from "./components/CheckoutForm";
//store
import { store } from "./store.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <ErrorElement />,
          loader: landingLoader,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "checkout",
          element: <Checkout />,
          loader: checkoutLoader(store),
          action: checkoutAction(store),
        },
        {
          path: "orders",
          element: <Orders />,
          loader: ordersLoader(store),
        },
        {
          path: "products",
          element: <Products />,
          loader: productsLoader,
        },
        {
          path: "products/:id",
          element: <SingleProduct />,
          loader: singleProductLoader,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
      action: loginAction(store),
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
      action: registerAction,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
