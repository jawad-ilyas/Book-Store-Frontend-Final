// src/redux/api/reviewApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../utilis/baseURL";

/**
 * Base query configuration
 * - Sets the base URL for API requests
 * - Includes credentials (cookies)
 * - Adds Authorization header if token exists
 */
const baseQuery = fetchBaseQuery({
    baseUrl: `${baseURL()}/api`,
    credentials: 'include',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    }
});

/**
 * Review API slice
 * - Handles fetching reviews for a book and adding a new review
 */
const reviewApi = createApi({
    reducerPath: 'reviewApi', // unique key for reducer
    baseQuery,
    tagTypes: ['Review'], // used for cache invalidation
    endpoints: (builder) => ({
        /**
         * Fetch all reviews for a specific book
         * GET /reviews/book/:id
         */
        getReviewsByBook: builder.query({
            query: (id) => `/reviews/book/${id}`,
            providesTags: ['Review']
        }),
        getReviewsByUser: builder.query({
            query: () => `/reviews/user`,
            providesTags: ['Review']
        }),

        /**
         * Add a new review for a book
         * POST /reviews/:id
         */
        addReview: builder.mutation({
            query: (data) => ({
                url: `/reviews/`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ['Review'] // invalidate cache to refetch reviews
        }),
    })
});

// Export hooks for functional components
export const {
    useGetReviewsByBookQuery,
    useAddReviewMutation,
    useGetReviewsByUserQuery
} = reviewApi;

export default reviewApi;
