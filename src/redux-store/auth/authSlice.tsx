import { createSlice } from "@reduxjs/toolkit";

// Define the type for your state
interface AuthState {
    token: string | null;
    refreshToken: string | null; // Add refresh token
    username: string | null;
}

// Define the type for your user object

// Retrieve token and refresh token from local storage
const tokenFromStorage = localStorage.getItem('token');
const refreshTokenFromStorage = localStorage.getItem('refreshToken');
// Define the initial state
const initialState: AuthState = { token: tokenFromStorage || null, refreshToken: refreshTokenFromStorage || null || null, username: null };

// Create the authentication slice

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { username, accessToken, refreshToken, } = action.payload;
            state.username = username;
            state.token = accessToken;
            state.refreshToken = refreshToken;
            // Store tokens in local storage
            localStorage.setItem('token', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('username', username);
            // console.log(localStorage.getItem('userRole'));
            // console.log(localStorage.getItem('userName'));
        },
        logOut: (state) => {
            state.username = null;
            state.token = null;
            state.refreshToken = null;
            // Remove tokens from local storage
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('username');
        },
        updateAccessToken: (state, action) => {
            const { accessToken } = action.payload;
            state.token = accessToken;
            // Update token in local storage
            localStorage.setItem('token', accessToken);
        }
    },
});

// Export the actions and reducer
export const { setCredentials, logOut, updateAccessToken } = authSlice.actions;
export default authSlice.reducer;

// Define the selectors with type annotations
export const selectCurrentUser = (state: { auth: AuthState }) => state.auth.username;
export const selectCurrentToken = (state: { auth: AuthState }) => state.auth.token;
export const selectRefreshToken = (state: { auth: AuthState }) => state.auth.refreshToken;

