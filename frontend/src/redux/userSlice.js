import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    userDetails: {},
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.userDetails = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.userDetails = {};
        },
        updateUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
    },
});

export const { login, logout, updateUserDetails } = userSlice.actions;

export default userSlice.reducer;
