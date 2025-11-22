import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../utilis/baseURL";

const baseQuery = fetchBaseQuery({
    baseUrl: `${baseURL()}/api`,
    credentials: 'include',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    }
});

const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery,
    tagTypes: ['Cart'],
    endpoints: (builder) => ({



        // Cart
        addToCart: builder.mutation({
            query: (data) => ({
                url: "/users/cart/add",
                method: "POST",
                body: data
            }),
            invalidatesTags: ['Cart']
        }),
        getCart: builder.query({
            query: () => ({
                url: "/users/cart/",

            }),
            providesTags: ['Cart']
        }),
        removeFromCart: builder.mutation({
            query: (data) => ({
                url: "/users/cart/remove",
                method: "PUT",
                body: data
            }),
            invalidatesTags: ['Cart']
        }),
        updateCartItem: builder.mutation({
            query: (data) => ({
                url: "/users/cart/update",
                method: "PUT",
                body: data
            }),
            invalidatesTags: ['Cart']
        }),

    })
});

// Export hooks
export const {

    useAddToCartMutation,
    useRemoveFromCartMutation,
    useUpdateCartItemMutation,
    useGetCartQuery

} = cartApi;

export default cartApi;
