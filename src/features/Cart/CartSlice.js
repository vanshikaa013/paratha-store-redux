import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find(cartItem => cartItem.id === item?.id);

      if (existingItem) {
        existingItem.quantity += 1; 
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter(cartItem => cartItem.id !== action.payload.id);
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find(cartItem => cartItem.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find(cartItem => cartItem.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
