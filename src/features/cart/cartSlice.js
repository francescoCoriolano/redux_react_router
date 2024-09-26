import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../assets/cartItems";

const initialState = {
  itemsList: cartItems,
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: false,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemId = action.payload;
      const itemToAdd = state.itemsList.find((item) => item.id === itemId);
      const existingCartItem = state.cartItems.find(
        (item) => item.id === itemId
      );
      if (existingCartItem) {
        existingCartItem.amount += 1;
      } else {
        state.cartItems.push({ ...itemToAdd, amount: 1 });
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const filteredList = state.cartItems.filter((item) => item.id !== itemId);
      state.cartItems = filteredList;
    },
    increase: (state, action) => {
      const itemId = action.payload;
      const itemToIncrease = state.cartItems.find((item) => item.id === itemId);
      itemToIncrease.amount += 1;
    },
    decrease: (state, action) => {
      const itemId = action.payload;
      const itemToIncrease = state.cartItems.find((item) => item.id === itemId);
      itemToIncrease.amount -= 1;
    },
    calculateTotal: (state) => {
      let total = 0;
      let amount = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.total = total;
      state.amount = amount;
    },
  },
});

export const {
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotal,
  addToCart,
} = cartSlice.actions;
export default cartSlice.reducer;
