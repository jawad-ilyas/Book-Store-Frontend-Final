import { configureStore } from "@reduxjs/toolkit";
import bookApi from "./book/bookApi";
import userApi from "./user/userApi"
import authSlice from "./auth/authSlice"
import orderApi from "./order/orderApi";
import bannerApi from "./banner/bannerApi";
import categoryApi from "./category/categoryApi";
import newsletterApi from "./newsletter/newsletterApi";
import cartApi from "./cart/cartApi";
import addressApi from "./address/addressApi";
import reviewApi from "./reviews/reviewsApi";
import adminApi from "./admin/adminApi";
import authorApi from "./author/authorApi";


const store = configureStore({
    reducer: {
        [bookApi.reducerPath]: bookApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        [bannerApi.reducerPath]: bannerApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [newsletterApi.reducerPath]: newsletterApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer,
        [addressApi.reducerPath]: addressApi.reducer,
        [reviewApi.reducerPath]: reviewApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
        [authorApi.reducerPath]: authorApi.reducer,
        auth: authSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(bookApi.middleware, userApi.middleware, orderApi.middleware, bannerApi.middleware, categoryApi.middleware, newsletterApi.middleware, reviewApi.middleware, cartApi.middleware, addressApi.middleware, adminApi.middleware, authorApi.middleware)
})


export { store }