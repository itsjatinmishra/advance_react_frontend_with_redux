import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      productName: "Laptop",
      price: 55000,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    },
    {
      id: 2,
      productName: "Smartphone",
      price: 25000,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    },
    {
      id: 3,
      productName: "Headphones",
      price: 3000,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 4,
      productName: "Keyboard",
      price: 1500,
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    },
  ],
  cart: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cart.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQty: (state, action) => {
      const item = state.cart.find((p) => p.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQty: (state, action) => {
      const item = state.cart.find((p) => p.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((p) => p.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = []; //Empty the cart
    },
  },
});

export const { addToCart, incrementQty, decrementQty, removeItem, clearCart } =
  productSlice.actions;
export default productSlice.reducer;
