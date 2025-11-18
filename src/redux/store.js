import { configureStore } from "@reduxjs/toolkit";
import bookApi from "./book/bookApi";

const store = configureStore({
    reducer: {

        [bookApi.reducerPath]: bookApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(bookApi.middleware)
})


export { store }