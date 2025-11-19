import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../utilis/baseURL";

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

const newsletterApi = createApi({
    reducerPath: "newsletterApi",
    baseQuery,
    tagTypes: ['Newsletter'],
    endpoints: (builder) => ({
        createSubscribeNewsletter: builder.mutation({
            query: (body) => ({
                url: "/newsletters/subscribe",
                method: 'POST',
                body
            }),
            invalidatesTags: ['Newsletter']
        }),
        getAllNewsLetter: builder.query({
            query: () => '/newsletters/',
            providesTags: ['Newsletter']

        })
    })
});

export const { useCreateSubscribeNewsletterMutation, useGetAllNewsLetterQuery } = newsletterApi;
export default newsletterApi;
