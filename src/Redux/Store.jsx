import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./CakeSlice";

// This is the Factory Warehouse
// where store all states and rules
// like reducer & state
const store = configureStore({
  reducer: {
    cake: cakeReducer,
  },
});

export default store;
