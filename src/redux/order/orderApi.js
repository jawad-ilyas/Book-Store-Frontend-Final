// src/redux/api/orderApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../utilis/baseURL";

/**
 * Base query configuration for RTK Query
 * - Sets the base URL for API requests
 * - Automatically includes credentials (cookies)
 * - Adds Authorization header if access token exists in localStorage
 */
const baseQuery = fetchBaseQuery({
    baseUrl: `${baseURL()}/api`,
    credentials: 'include',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    }
});

/**
 * Order API slice using RTK Query
 * - Handles creating an order, fetching all orders, and fetching order by ID
 */
const orderApi = createApi({
    reducerPath: 'orderApi', // unique key for the reducer
    baseQuery,
    tagTypes: ['Orders'], // used for cache invalidation
    endpoints: (builder) => ({
        /**
         * Create a new order
         * POST /orders/
         * Invalidates 'Orders' tag to refetch the order list
         */
        createOrder: builder.mutation({
            query: (data) => ({
                url: '/orders/',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Orders']
        }),

        /**
         * Fetch all orders
         * GET /orders/
         * Provides 'Orders' tag for cache management
         */
        getAllOrders: builder.query({
            query: () => '/orders/',
            providesTags: ['Orders']
        }),

        /**
         * Fetch order by ID
         * GET /orders/:id
         * Provides 'Orders' tag for cache management
         */
        getOrderById: builder.query({
            query: (id) => `/orders/${id}`,
            providesTags: ['Orders']
        })
    })
});

// Export hooks for usage in functional components
export const { 
    useCreateOrderMutation, 
    useGetOrderByIdQuery, 
    useGetAllOrdersQuery, 
    useLazyGetAllOrdersQuery 
} = orderApi;

export default orderApi;
