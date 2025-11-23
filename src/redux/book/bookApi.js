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
            providesTags: ["Book"],

        }),

        getRecommendedBooks: builder.query({
            query: () => "/books/getRecommendedBooks",
            providesTags: ["Book"],

        }),

        createBook: builder.mutation({
            query: (data) => ({
                url: "/books/admin/createBook",
                method: "POST",
                body: data

            }),
            invalidatesTags: ['Book']
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/admin/deleteBook/${id}`,
                method: "DELETE",

            }),
            invalidatesTags: ['Book']

        })

    })
})

export const { useGetBooksQuery, useGetBookByIdQuery, useGetTopSellersQuery, useGetRecommendedBooksQuery, useCreateBookMutation ,useDeleteBookMutation } = bookApi
export default bookApi