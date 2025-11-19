import { configureStore } from "@reduxjs/toolkit";
import bookApi from "./book/bookApi";
import userApi from "./user/userApi"
import authSlice from "./auth/authSlice"
import orderApi from "./order/orderApi";
const store = configureStore({
    reducer: {
        [bookApi.reducerPath]: bookApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        auth: authSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(bookApi.middleware, userApi.middleware, orderApi.middleware)
})


export { store }