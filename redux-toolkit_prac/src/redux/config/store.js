import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../modules/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
