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

const adminApi = createApi({
    reducerPath: 'adminApi',
    baseQuery,
    tagTypes: ['Admin'],
    endpoints: (builder) => ({

        getAdminAnalytics: builder.query({
            query: () => '/adminAnalytics/',
            providesTags: ['Admin']
        })
    })
})
export const { useGetAdminAnalyticsQuery } = adminApi
export default adminApi