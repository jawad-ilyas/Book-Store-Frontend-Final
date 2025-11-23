import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiUpload } from "react-icons/fi";
import { useGetAllAuthorsQuery } from "../../../redux/author/authorApi";
import { useGetAllCategoriesQuery } from "../../../redux/category/categoryApi";
import { useCreateBookMutation } from "../../../redux/book/bookApi";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import AdminLayout from "../../AdminLayout";

const AddBook = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, setValue, reset, formState: { errors }, watch } = useForm();
    const [coverImage, setCoverImage] = useState(null);
    const [additionalImages, setAdditionalImages] = useState([]);
    const [createBook] = useCreateBookMutation()
    const onSubmit = async (data) => {
        console.log("Book Data:", data);
        console.log(data?.converImage?.[0])
        console.log("Cover Image:", coverImage);
        console.log("Additional Images:", additionalImages);


        const formData = new FormData();

        // Append text fields
        formData.append("title", data.title);
        formData.append("author", data.author);
        formData.append("category", data.category);
        formData.append("subCategory", data.subCategory || "");
        formData.append("price", data.price);
        formData.append("discountPercent", data.discountPercent || 0);
        formData.append("stock", data.stock || 0);
        formData.append("slug", data.slug);
        formData.append("description", data.description || "");
        formData.append("topSeller", data.topSeller ? "true" : "false");
        formData.append("recommended", data.recommended ? "true" : "false");

        // Append cover image
        if (coverImage) {
            formData.append("coverImage", coverImage);
        }

        // Append additional images
        additionalImages.forEach((file, index) => {
            formData.append("images", file);
        });

        const response = await createBook(formData)
        console.log("response of the new create book ", response)

        if (response?.data?.success) {
            reset()
            toast.success(response?.data?.message || "New Book Add successfully!", {
                position: "top-right",
                autoClose: 5000,
                theme: "dark",
            });

            setTimeout(() => {
                navigate(`/book/${response?.data?.book?._id}`)
            }, 7000)
        }
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

    const titleValue = watch("title");

    const generateSlug = (text) => {
        return text
            .toLowerCase()                  // convert to lowercase
            .trim()                         // remove leading/trailing spaces
            .replace(/[\s\W-]+/g, "-");    // replace spaces and special chars with hyphen
    };

    useEffect(() => {
        if (titleValue) {
            let slug = generateSlug(titleValue)
            setValue("slug", slug)
        }
    }, [titleValue, setValue])

    // query for fetch categories 
    const { data: categoryData } = useGetAllCategoriesQuery();
    // console.log("categoryData", categoryData)
    const { categoriesList } = categoryData || []
    // console.log("categoriesList", categoriesList)
    return (
        <AdminLayout>
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
                        <div>
                            <label className="text-gray-700 dark:text-gray-300 font-medium">Slug</label>
                            <input
                                type="text"
                                {...register("slug", { required: "Slug is required" })}
                                placeholder="Enter book Slug"
                                readOnly
                                className="w-full mt-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none"
                            />
                            {errors.slug && <p className="text-red-500 text-sm mt-1">{errors.slug.message}</p>}
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
        </AdminLayout>
    );
};

export default AddBook;
