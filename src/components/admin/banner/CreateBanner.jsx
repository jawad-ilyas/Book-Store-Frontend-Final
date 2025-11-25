import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateBannerMutation } from "../../../redux/banner/bannerApi";
import AdminLayout from "../../AdminLayout";

const CreateBanner = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [heroImage, setHeroImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);
  const [createBanner] = useCreateBannerMutation();
  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("heroTitle", data?.heroTitle)
    formData.append("heroSubtitle", data?.heroSubtitle)
    formData.append("promoText", data?.promoText)
    formData.append("promoLink", data?.promoLink)


    if (data.heroImage && data.heroImage[0]) formData.append("heroImage", data.heroImage[0]);
    if (data.bannerImage && data.bannerImage[0]) formData.append("bannerImage", data.bannerImage[0]);
    formData.forEach((value, key) => console.log(key, value));
    const response = await createBanner(formData)
    console.log("response of the data ", response)
    console.log("Banner Data:", data);
  };

  const handleFileChange = (e, setter) => {
    const file = e.target.files[0];
    if (file) setter(file);
  };

  return (
    <AdminLayout>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
        {/* Sidebar */}

        {/* Main Content */}
        <div className="flex-grow p-6 sm:p-10">
          <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">Manage Banner</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">

            {/* Hero Title */}
            <div>
              <label className="text-gray-700 dark:text-gray-300 font-medium">Hero Title</label>
              <input
                type="text"
                {...register("heroTitle", { required: "Hero Title is required" })}
                placeholder="Enter hero title"
                className="w-full mt-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none"
              />
              {errors.heroTitle && <p className="text-red-500 text-sm mt-1">{errors.heroTitle.message}</p>}
            </div>

            {/* Hero Subtitle */}
            <div>
              <label className="text-gray-700 dark:text-gray-300 font-medium">Hero Subtitle</label>
              <input
                type="text"
                {...register("heroSubtitle")}
                placeholder="Enter hero subtitle"
                className="w-full mt-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none"
              />
            </div>

            {/* Hero Image Upload */}
            <div>
              <label className="text-gray-700 dark:text-gray-300 font-medium">Hero Image</label>
              <input
                type="file"
                accept="image/*"
                {...register("heroImage")}


                onChange={(e) => handleFileChange(e, setHeroImage)}
                className="w-full mt-2 text-gray-700 dark:text-gray-300"
              />
              {heroImage && (
                <img
                  src={URL.createObjectURL(heroImage)}
                  alt="Hero Preview"
                  className="mt-3 w-full h-48 object-cover rounded-xl shadow"
                />
              )}
            </div>

            {/* Banner Image Upload */}
            <div>
              <label className="text-gray-700 dark:text-gray-300 font-medium">Banner Image</label>
              <input
                type="file"
                {...register("bannerImage")}

                accept="image/*"


                onChange={(e) => handleFileChange(e, setBannerImage)}
                className="w-full mt-2 text-gray-700 dark:text-gray-300"
              />
              {bannerImage && (
                <img
                  src={URL.createObjectURL(bannerImage)}
                  alt="Banner Preview"
                  className="mt-3 w-full h-48 object-cover rounded-xl shadow"
                />
              )}
            </div>

            {/* Promo Text */}
            <div>
              <label className="text-gray-700 dark:text-gray-300 font-medium">Promo Text</label>
              <input
                type="text"
                {...register("promoText")}
                placeholder="Enter promotional text"
                className="w-full mt-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none"
              />
            </div>

            {/* Promo Link */}
            <div>
              <label className="text-gray-700 dark:text-gray-300 font-medium">Promo Link</label>
              <input
                type="text"
                {...register("promoLink")}
                placeholder="Enter promotional link"
                className="w-full mt-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
            >
              Save Banner
            </button>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default CreateBanner;
