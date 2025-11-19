// src/redux/api/bannerApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../utilis/baseURL";

/**
 * Base query configuration
 * - Sets the base URL for API requests
 * - Includes credentials (cookies)
 * - Adds Authorization header if token exists
 */
const baseQuery = fetchBaseQuery({
  baseUrl: `${baseURL()}/api/banners`,
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const bannerApi = createApi({
  reducerPath: "bannerApi",
  baseQuery,
  tagTypes: ["Banner"], // used for cache invalidation
  endpoints: (builder) => ({
    // Public: get all banners
    getAllBanners: builder.query({
      query: () => "/getAllBanners",
      providesTags: ["Banner"],
    }),

    // Admin: create a banner
    createBanner: builder.mutation({
      query: (formData) => ({
        url: "/admin/createBanner",
        method: "POST",
        body: formData, // formData for images
      }),
      invalidatesTags: ["Banner"],
    }),

    // Admin: update banner details
    updateBanner: builder.mutation({
      query: ({ id, ...data }) => ({  
        url: `/admin/updateBanner/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Banner"],
    }),

    // Admin: update hero image
    updateHeroImage: builder.mutation({
      query: (formData) => ({
        url: "/admin/updateHeroImage",
        method: "PUT",
        body: formData, // formData for single image
      }),
      invalidatesTags: ["Banner"],
    }),

    // Admin: update main/banner image
    updateBannerImage: builder.mutation({
      query: (formData) => ({
        url: "/admin/updateBannerImage",
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Banner"],
    }),

    // Admin: delete banner
    deleteBanner: builder.mutation({
      query: (id) => ({
        url: `/admin/deleteBanner/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Banner"],
    }),
  }),
});

// Export hooks for functional components
export const {
  useGetAllBannersQuery,
  useCreateBannerMutation,
  useUpdateBannerMutation,
  useUpdateHeroImageMutation,
  useUpdateBannerImageMutation,
  useDeleteBannerMutation,
} = bannerApi;

export default bannerApi;
