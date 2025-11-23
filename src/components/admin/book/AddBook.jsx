import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiUpload } from "react-icons/fi";
import { useGetAllAuthorsQuery } from "../../../redux/author/authorApi";
import { useGetAllCategoriesQuery } from "../../../redux/category/categoryApi";

const AddBook = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [coverImage, setCoverImage] = useState(null);
    const [additionalImages, setAdditionalImages] = useState([]);

    const onSubmit = (data) => {
        console.log("Book Data:", data);
        console.log(data?.converImage?.[0])
        console.log("Cover Image:", coverImage);
        console.log("Additional Images:", additionalImages);
    };



    const handleCoverChange = (e) => {
        const file = e.target.files[0];
        if (file) setCoverImage(file);
    };

    const handleAdditionalImages = (e) => {
        const files = Array.from(e.target.files);
        setAdditionalImages(files);
    };


    // query for fetch authors 
    const { data } = useGetAllAuthorsQuery()
    const { authors } = data || []


    // query for fetch categories 
    const { data: categoryData } = useGetAllCategoriesQuery();
    // console.log("categoryData", categoryData)
    const { categoriesList } = categoryData || []
    // console.log("categoriesList", categoriesList)
    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 p-6 sm:p-10">
            <div className="flex-grow max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Add New Book</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6">

                    {/* Title */}
                    <div>
                        <label className="text-gray-700 dark:text-gray-300 font-medium">Book Title</label>
                        <input
                            type="text"
                            {...register("title", { required: "Title is required" })}
                            placeholder="Enter book title"
                            className="w-full mt-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none"
                        />
                        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
                    </div>

                    {/* Author */}
                    <div>
                        <label className="text-gray-700 dark:text-gray-300 font-medium">Author</label>
                        <select
                            {...register("author", { required: "Author is required" })}
                            className="w-full mt-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none"
                        >
                            <option value="">Select Author</option>
                            {authors && authors.map((auth) => <option key={auth?._id} value={`${auth?._id}`}>{auth?.name}</option>)}

                        </select>
                    </div>

                    {/* Category */}
                    <div>
                        <label className="text-gray-700 dark:text-gray-300 font-medium">Category</label>
                        <select
                            {...register("category", { required: "Category is required" })}
                            className="w-full mt-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none"
                        >
                            <option value="">Select Category</option>

                            {categoriesList && categoriesList.map((cat) => <option key={cat?._id} value={`${cat?._id}`}>{cat?.name}</option>)}

                        </select>
                    </div>

                    {/* Subcategory */}
                    <div>
                        <label className="text-gray-700 dark:text-gray-300 font-medium">Subcategory</label>
                        <input
                            type="text"
                            {...register("subCategory")}
                            placeholder="Optional subcategory"
                            className="w-full mt-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none"
                        />
                    </div>

                    {/* Price & Discount */}
                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <label className="text-gray-700 dark:text-gray-300 font-medium">Price</label>
                            <input
                                type="number"
                                {...register("price", { required: "Price is required" })}
                                placeholder="0.00"
                                className="w-full mt-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="text-gray-700 dark:text-gray-300 font-medium">Discount %</label>
                            <input
                                type="number"
                                {...register("discountPercent")}
                                placeholder="0"
                                className="w-full mt-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none"
                            />
                        </div>
                    </div>

                    {/* Stock */}
                    <div>
                        <label className="text-gray-700 dark:text-gray-300 font-medium">Stock Quantity</label>
                        <input
                            type="number"
                            {...register("stock")}
                            placeholder="0"
                            className="w-full mt-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none"
                        />
                    </div>

                    {/* Cover Image */}
                    <div>
                        <label className="text-gray-700 dark:text-gray-300 font-medium">Cover Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleCoverChange}
                            className="w-full mt-2 text-gray-700 dark:text-gray-300"
                        />
                        {coverImage && (
                            <img
                                src={URL.createObjectURL(coverImage)}
                                alt="Cover Preview"
                                className="mt-3 w-48 h-64 object-cover rounded-xl shadow cursor-pointer hover:opacity-90 transition"
                            />
                        )}
                    </div>

                    {/* Additional Images */}
                    <div>
                        <label className="text-gray-700 dark:text-gray-300 font-medium">Additional Images</label>
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleAdditionalImages}
                            className="w-full mt-2 text-gray-700 dark:text-gray-300"
                        />
                        <div className="flex space-x-3 mt-3 overflow-x-auto">
                            {additionalImages.map((file, idx) => (
                                <img
                                    key={idx}
                                    src={URL.createObjectURL(file)}
                                    alt={`Additional ${idx}`}
                                    className="w-32 h-40 object-cover rounded-xl shadow cursor-pointer hover:opacity-90 transition"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="text-gray-700 dark:text-gray-300 font-medium">Description</label>
                        <textarea
                            {...register("description")}
                            placeholder="Book description"
                            className="w-full mt-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none resize-none h-28"
                        />
                    </div>

                    {/* Top Seller & Recommended toggles */}
                    <div className="flex space-x-6">
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                {...register("topSeller")}
                                className="h-5 w-5 accent-teal-500"
                            />
                            <label className="text-gray-700 dark:text-gray-300 font-medium">Top Seller</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                {...register("recommended")}
                                className="h-5 w-5 accent-teal-500"
                            />
                            <label className="text-gray-700 dark:text-gray-300 font-medium">Recommended</label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl transition"
                    >
                        Add Book
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBook;
