import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import AdminLayout from "../../AdminLayout";
import {
  useUpdateBannerMutation,
  useUpdateHeroImageMutation,
  useUpdateBannerImageMutation,
  useGetBannerQuery,
} from "../../../redux/banner/bannerApi";
import { useParams } from "react-router-dom";

const UpdateBanner = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetBannerQuery(id);
  const { bannerData } = data || {}
  // console.log("bannerData", bannerData)
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [updateBanner] = useUpdateBannerMutation();
  const [updateHeroImage] = useUpdateHeroImageMutation();
  const [updateBannerImage] = useUpdateBannerImageMutation();

  const [heroImage, setHeroImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);

  useEffect(() => {
    if (bannerData) {
      reset({
        heroTitle: bannerData.heroTitle || "",
        heroSubtitle: bannerData.heroSubtitle || "",
        promoText: bannerData.promoText || "",
        promoLink: bannerData.promoLink || "",
        isActive: bannerData.isActive || false,
      });
    }
  }, [bannerData, reset]);

  const handleTextUpdate = async (data) => {
    // console.log("we are into face of the udpate text fields ")
    try {

      await updateBanner({ id, data }).unwrap();
      // alert("Banner text updated successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  const handleImageUpdate = async (file, type) => {
    if (!file) return;
    const formData = new FormData();
    formData.append(type, file);
    try {
      if (type === "heroImage") await updateHeroImage({ id, formData }).unwrap();
      if (type === "bannerImage") await updateBannerImage({ id, formData }).unwrap();
      alert(`${type} updated successfully!`);
      if (type === "heroImage") setHeroImage(null);
      if (type === "bannerImage") setBannerImage(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleFileChange = (e, setter) => {
    const file = e.target.files[0];
    if (file) setter(file);
  };

  if (isLoading) return <p className="text-center py-20">Loading banner...</p>;

  return (
    <AdminLayout>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="flex-grow p-6 sm:p-10">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
            Update Banner
          </h1>

          {/* --- TEXT FORM --- */}
          <form onSubmit={handleSubmit(handleTextUpdate)} className="space-y-5 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
            <div>
              <label className="font-medium text-gray-700 dark:text-gray-300">Hero Title</label>
              <input
                type="text"
                {...register("heroTitle", { required: "Hero Title is required" })}
                className="w-full mt-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              />
              {errors.heroTitle && <p className="text-red-500 text-sm mt-1">{errors.heroTitle.message}</p>}
            </div>

            <div>
              <label className="font-medium text-gray-700 dark:text-gray-300">Hero Subtitle</label>
              <input
                type="text"
                {...register("heroSubtitle")}
                className="w-full mt-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              />
            </div>

            <div>
              <label className="font-medium text-gray-700 dark:text-gray-300">Promo Text</label>
              <input
                type="text"
                {...register("promoText")}
                className="w-full mt-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              />
            </div>

            <div>
              <label className="font-medium text-gray-700 dark:text-gray-300">Promo Link</label>
              <input
                type="text"
                {...register("promoLink")}
                className="w-full mt-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              />
            </div>

            <div className="flex items-center gap-3">
              <input type="checkbox" {...register("isActive")} id="isActive"  />
              <label htmlFor="isActive" className="text-gray-700 dark:text-gray-300 font-medium">Active</label>
            </div>

            <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Update Text
            </button>
          </form>

          {/* --- HERO IMAGE --- */}
          <div className="mt-10 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">Hero Image</h2>
            <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setHeroImage)} className="mb-3" />
            {(heroImage || bannerData.heroImage) && (
              <img
                src={heroImage ? URL.createObjectURL(heroImage) : bannerData.heroImage}
                alt="Hero Preview"
                className="w-full h-48 object-cover rounded-xl shadow mb-3"
              />
            )}
            <button
              className="px-6 py-2 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition"
              onClick={() => handleImageUpdate(heroImage, "heroImage")}
            >
              Update Hero Image
            </button>
          </div>

          {/* --- BANNER IMAGE --- */}
          <div className="mt-10 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">Banner Image</h2>
            <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setBannerImage)} className="mb-3" />
            {(bannerImage || bannerData.bannerImage) && (
              <img
                src={bannerImage ? URL.createObjectURL(bannerImage) : bannerData.bannerImage}
                alt="Banner Preview"
                className="w-full h-48 object-cover rounded-xl shadow mb-3"
              />
            )}
            <button
              className="px-6 py-2 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition"
              onClick={() => handleImageUpdate(bannerImage, "bannerImage")}
            >
              Update Banner Image
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default UpdateBanner;
