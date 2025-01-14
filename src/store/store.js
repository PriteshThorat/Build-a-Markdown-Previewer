import { configureStore } from "@reduxjs/toolkit";
import markedTextSlice from "./markedTextSlice";

const store = configureStore({
  reducer: {
    marked: markedTextSlice
  }
});

export default store;