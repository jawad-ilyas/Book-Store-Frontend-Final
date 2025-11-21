import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../utilis/baseURL";



const baseQuery = fetchBaseQuery({
    baseUrl: `${baseURL()}/api`,
    credentials: 'include', // this include is used if we are using the cookie 
    prepareHeaders: (headers) => {
        const token = localStorage.getItem("accessToken")
        if (token) {
            headers.set('Authorization', `Bearer ${token}`)
        }
        return headers;
    }
})

const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery,
    tagTypes: ['Book'],
    endpoints: (builder) => ({

        // getBooks: builder.query({
        //     // query: ({ search = "", category = "", minPrice = 0, maxPrice = 99999999999999, minRating = 0 }) => {
        //     query: () => {

        //         // const params = new URLSearchParams();

        //         // if (search) params.append("search", search);
        //         // if (category) params.append("category", category);
        //         // if (minPrice) params.append("minPrice", minPrice);
        //         // if (maxPrice) params.append("maxPrice", maxPrice);
        //         // if (minRating) params.append("minRating", minRating)

        //         return {
        //             url: `/books/getBooks`,
        //             method: "GET",
        //         }
        //     },
        //     providesTags: ['Book']
        // }),
        getBooks: builder.query({
            query: ({ search = "", category = "", minRating = -1, limit, page }) => {
                const params = new URLSearchParams();

                if (search) params.append("search", search);
                if (category) params.append("category", category);
                if (minRating !== -1) params.append("minRating", minRating)
                if (limit) params.append("limit", limit)
                if (page) params.append("page", page)
                return {
                    url: `/books/getBooks?${params.toString()}`,   // <-- CORRECT
                    method: "GET",
                };
            },
            providesTags: ["Book"],
        }),
        getBookById: builder.query({
            query: (id) => `/books/${id}`,
            providesTags: ["Book"],
        }),

        getTopSellers: builder.query({
            query: () => "/books/getTopSellers",
        }),

        getRecommendedBooks: builder.query({
            query: () => "/books/getRecommendedBooks",
        }),


    })
})

export const { useGetBooksQuery, useGetBookByIdQuery, useGetTopSellersQuery, useGetRecommendedBooksQuery } = bookApi
export default bookApi