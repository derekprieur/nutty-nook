import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const index = state.items.findIndex(item => item.id === product.id);

            if (index !== -1) {
                state.items[index].quantity++;
            } else {
                state.items.push({ ...product, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            state.items = state.items.filter(item => item.id !== productId);
        },
        updateCartItem: (state, action) => {
            const { productId, newQuantity } = action.payload;
            const index = state.items.findIndex(item => item.id === productId);

            if (index !== -1) {
                state.items[index].quantity = newQuantity;
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, updateCartItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
