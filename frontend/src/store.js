import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './redux/cartSlice';
import searchReducer from './redux/searchSlice';
import userReducer from './redux/userSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'],
};

const rootReducer = {
    cart: cartReducer,
    search: searchReducer,
    user: persistReducer(persistConfig, userReducer),
};

const store = configureStore({
    reducer: rootReducer,
});

export const persistor = persistStore(store);

export default store;
