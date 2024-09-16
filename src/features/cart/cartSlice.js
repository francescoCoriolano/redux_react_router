import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../.././cartItems";

//const url = "https://www.course-api.com/react-useReducer-cart-project";

// export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
//   return fetch(url)
//     .then((resp) => resp.json())
//     .catch((err) => console.log(err));
// });

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: false,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
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
    // getCartItems: create.asyncThunk(
    //   async () => {
    //     const res = await fetch(url);
    //     return await res.json();
    //   },
    //   {
    //     pending: (state) => {
    //       state.loading = true;
    //     },
    //     rejected: (state, action) => {
    //       state.loading = false;
    //     },
    //     fulfilled: (state, action) => {
    //       state.loading = false;
    //       state.todos.push(action.payload);
    //     },
    //   }
    // ),
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
