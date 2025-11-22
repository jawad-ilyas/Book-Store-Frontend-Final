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

const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({
        // User Authentication
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
                url: "/auth/login",
                method: "POST",
                body: data
            }),
            invalidatesTags: ['User']
        }),
        logout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
             
            }),
            invalidatesTags: ['User']
        }),

        // Profile
        getProfile: builder.query({
            query: () => "/users/profile",
            providesTags: ['User']
        }),
        updateUserProfile: builder.mutation({
            query: (data) => ({
                url: `/users/updateUserProfile`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ['User']
        }),
        updateImage: builder.mutation({
            query: (body) => ({
                url: "/users/updateImage",
                method: 'PUT',
                body
            }),
            invalidatesTags: ['User']
        }),
        // Wishlist
        addToWishlist: builder.mutation({
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
        }),
    })
});

// Export hooks
export const {
    useLogoutMutation,
    useRegisterUserMutation,
    useLoginUserMutation,
    useGetProfileQuery,
    useUpdateUserProfileMutation,
    useUpdateImageMutation,
    useAddToWishlistMutation,
    useRemoveFromWishlistMutation,
    useGetWishlistQuery
} = userApi;

export default userApi;
