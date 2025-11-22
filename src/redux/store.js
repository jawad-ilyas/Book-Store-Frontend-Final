import { configureStore } from "@reduxjs/toolkit";
import bookApi from "./book/bookApi";
import userApi from "./user/userApi"
import authSlice from "./auth/authSlice"
import orderApi from "./order/orderApi";
import bannerApi from "./banner/bannerApi";
import categoryApi from "./category/categoryApi";
import newsletterApi from "./newsletter/newsletterApi";
import reviewApi from "./reviews/reviewsApi";
import cartApi from "./cart/cartApi";


const store = configureStore({
    reducer: {
        [bookApi.reducerPath]: bookApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        [bannerApi.reducerPath]: bannerApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [newsletterApi.reducerPath]: newsletterApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer,
        auth: authSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(bookApi.middleware, userApi.middleware, orderApi.middleware, bannerApi.middleware, categoryApi.middleware, newsletterApi.middleware, reviewApi.middleware, cartApi.middleware)
})


export { store }