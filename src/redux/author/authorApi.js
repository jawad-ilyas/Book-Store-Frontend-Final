import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../utilis/baseURL";


const baseQuery = fetchBaseQuery({
    baseUrl: `${baseURL()}/api`,
    credentials: 'include',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem("accessToken")
        if (token) {
            headers.set("Authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const authorApi = createApi({
    reducerPath: 'authorApi',
    baseQuery,
    tagTypes: ['Author'],
    endpoints: (builder) => ({

        getAllAuthors: builder.query({
            query: () => '/authors/getAllAuthors',
            providesTags: ['Author']
        })
    })
})
export const { useGetAllAuthorsQuery } = authorApi
export default authorApi