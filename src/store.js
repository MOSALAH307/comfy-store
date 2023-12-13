import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/CartSlice";
import userReducer from "./features/UserSlice";

export const store = configureStore({
  reducer: { cartState: cartReducer, userState: userReducer },
});
