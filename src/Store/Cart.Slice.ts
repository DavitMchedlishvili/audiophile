import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../Types/products";

export type cartItem = {
  amount: number;
  product: Product;
};

const initialState: {
  value: cartItem[];
} = {
  value: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (
      state,
      {
        payload: { num, product },
      }: PayloadAction<{ num: number; product: Product }>
    ) => {
      if (num === 0) {
        const newCartArray = state.value.filter(
          (item) => item.product.id !== product.id
        );
        state.value = newCartArray;
      }

      if (num >= 1) {
        const index = state.value.findIndex(
          (item) => item.product.id === product.id
        );

        if (index > -1) {
          state.value[index].amount = num;
        } else {
          state.value.push({
            amount: num,
            product: product,
          });
        }
      }
    },

    clearCart: (state) => {
      state.value = [];
    },
  },
});

export const { updateCart, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
