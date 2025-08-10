import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  if (typeof window === "undefined") return defaultState; // SSR захист
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const calculateTotals = (state) => {
  state.numItemsInCart = state.cartItems.reduce((sum, i) => sum + i.amount, 0);
  state.cartTotal = state.cartItems.reduce(
    (sum, i) => sum + i.price * i.amount,
    0
  );
  state.tax = 0.1 * state.cartTotal;
  state.orderTotal = state.cartTotal + state.shipping + state.tax;
  localStorage.setItem("cart", JSON.stringify(state));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === product.cartID);

      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }

      calculateTotals(state);
      toast.success("Item added to cart");
    },

    clearCart: (state) => {
      Object.assign(state, defaultState);
      localStorage.removeItem("cart");
      toast("Cart cleared");
    },

    removeItem: (state, action) => {
      const cartID = action.payload; // тепер це просто рядок
      state.cartItems = state.cartItems.filter(
        (item) => item.cartID !== cartID
      );
      calculateTotals(state);
      toast("Item removed from cart");
    },

    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === cartID);
      if (item) {
        item.amount = amount > 0 ? amount : 1;
      }
      calculateTotals(state);
      toast("Cart updated");
    },
  },
});

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
