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


const addressApi = createApi({

    reducerPath: 'addressApi',
    baseQuery,
    tagTypes: ['Address'],
    endpoints: (builder) => ({

        createAddress: builder.mutation({
            query: (data) => ({
                url: `/address/createAddress`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Address']
        }),
        getAddresses: builder.query({
            query: () => ({
                url: `/address/`,
                method: 'GET',
            }),
            providesTags: ['Address']
        })
    })
})

export const { useCreateAddressMutation, useGetAddressesQuery } = addressApi
export default addressApi