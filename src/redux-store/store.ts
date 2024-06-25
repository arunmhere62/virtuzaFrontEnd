import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice';
import { apiSlice } from "./api/apiSlice";
import { loginApi } from "./auth/loginApi";
import { globalSlice } from "./global/globalState";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [loginApi.reducerPath]: loginApi.reducer, // Add loginApi reducer
    globalState: globalSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    apiSlice.middleware,
    loginApi.middleware, // Add loginApi middleware
  ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
