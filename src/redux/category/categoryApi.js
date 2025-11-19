import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../utilis/baseURL";

const baseQuery = fetchBaseQuery({
  baseUrl: `${baseURL()}/api/categories`,
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery,
  tagTypes: ["Categories"], // ✅ tags for cache invalidation
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => "/",
      providesTags: ["Categories"], // ✅ provides tag
    }),
    createCategory: builder.mutation({
      query: (formData) => ({
        url: "/admin/createCategory",
        method: "POST",
        body: formData,
        headers: {}, // remove JSON content-type for file upload
      }),
      invalidatesTags: ["Categories"], // ✅ invalidates tag
    }),
  }),
});

export const { useGetAllCategoriesQuery, useCreateCategoryMutation } = categoryApi;
export default categoryApi;
