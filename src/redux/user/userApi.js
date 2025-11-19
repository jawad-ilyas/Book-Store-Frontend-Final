import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../utilis/baseURL";
import { build } from "vite";




const baseQuery = fetchBaseQuery({
    baseUrl: `${baseURL()}/api`,
    credentials: 'include',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem("accessToken")
        if (token) {
            headers.set("Authorization", `Bearer ${token}`)
        }
        return headers;
    }
})


const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({

        registerUser: builder.mutation({
            query: (data) => ({
                url: "/auth/register",
                method: "POST",
                body: data
            }),
            invalidatesTags: ['User']
        }),

        loginUser: builder.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['User']
        }),

        getProfile: builder.query({
            query: () => '/users/profile',
            providesTags: ['User']
        }),

        updateUserProfile: builder.mutation({
            query: ({ id, data }) => ({
                url: `/users/updateUserProfile/${id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ['User']
        }),

        addToCart: builder.mutation({
            query: (data) => ({
                url: "/users/cart/add",
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['User']
        }),

        removeFromCart: builder.mutation({
            query: (data) => ({
                url: "/users/cart/remove",
                method: "PUT",
                body: data
            }),
            invalidatesTags: ['User']
        }),

        updateCartItem: builder.mutation({
            query: (data) => ({
                url: "/users/cart/remove",
                method: "PUT",
                body: data
            }),
            invalidatesTags: ['User']
        }),
        addToWishlist: build.mutation({
            query: (data) => ({
                url: "/users/wishlist/add",
                method: "POST",
                body: data
            }),
            invalidatesTags: ['User']

        }),

        removeFromWishlist: builder.mutation({
            query: (data) => ({
                url: "/users/wishlist/remove",
                method: "POST",
                body: data
            }),
            invalidatesTags: ['User']

        }),
        getWishlist: builder.query({
            query: () => "/users/wishlist/getWishlist",
            providesTags: ['User']
        })

    })
})


export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useGetProfileQuery,
    useUpdateUserProfileMutation,
    useAddToCartMutation,
    useRemoveFromCartMutation,
    useUpdateCartItemMutation
} = userApi

export default userApi