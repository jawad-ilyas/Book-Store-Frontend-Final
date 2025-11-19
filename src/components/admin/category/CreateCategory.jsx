import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateCategoryMutation } from "../../../redux/category/categoryApi";
import { useGetAllNewsLetterQuery } from "../../../redux/newsletter/newsletterApi";

const CreateCategory = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [coverImageSet, setCoverImageSet] = useState(null);

  const [createCategory, { isLoading }] = useCreateCategoryMutation();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("slug", data.slug);
    formData.append("description", data.description || "");
    if (data.coverImage && data.coverImage[0]) {
      formData.append("coverImage", data.coverImage[0]);
    }
    formData.append("isActive", data.isActive);

    try {
      await createCategory(formData).unwrap(); // ✅ unwrap ensures proper invalidation
      reset(); // Clear the form
      setCoverImageSet(null);
    } catch (err) {
      console.error("Failed to create category:", err);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setCoverImageSet(file);
  };
  const { data } = useGetAllNewsLetterQuery();
  const news = data?.news || []
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex-grow p-6 sm:p-10">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Manage Categories
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg max-w-3xl mx-auto"
        >
          <div>
            <label className="text-gray-700 dark:text-gray-300 font-medium">
              Category Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Category name is required" })}
              placeholder="Enter category name"
              className="w-full mt-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-300 font-medium">Slug</label>
            <input
              type="text"
              {...register("slug", { required: "Slug is required" })}
              placeholder="Enter slug"
              className="w-full mt-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none"
            />
            {errors.slug && <p className="text-red-500 text-sm mt-1">{errors.slug.message}</p>}
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-300 font-medium">Description</label>
            <textarea
              {...register("description")}
              placeholder="Enter category description"
              className="w-full mt-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none resize-none"
              rows={4}
            ></textarea>
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-300 font-medium">Cover Image</label>
            <input
              type="file"
              accept="image/*"
              {...register("coverImage", { required: true })}
              onChange={handleFileChange}
              className="w-full mt-2 text-gray-700 dark:text-gray-300"
            />
            {coverImageSet && (
              <img
                src={URL.createObjectURL(coverImageSet)}
                alt="Cover Preview"
                className="mt-3 w-full h-48 object-cover rounded-xl shadow"
              />
            )}
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-300 font-medium">Status</label>
            <select
              {...register("isActive", { required: true })}
              className="w-full mt-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <button
            type="submit"
            className={`w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition ${isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save Category"}
          </button>
        </form>
  
      </div>
    </div>
  );
};

export default CreateCategory;
