import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './redux/cartSlice';
import searchReducer from './redux/searchSlice';
import userReducer from './redux/userSlice';

export default configureStore({
    reducer: {
        cart: cartReducer,
        search: searchReducer,
        user: userReducer,
    },
});
