import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";
import { useParams } from "react-router-dom";
import { useAddReviewMutation } from "../../redux/reviews/reviewsApi";

const AddBookReview = ({ bookId }) => {
    const { register, handleSubmit, reset, watch, setValue } = useForm({
        defaultValues: { rating: 5, comment: "" },
    });
    const [hoverRating, setHoverRating] = useState(0);
    const { id } = useParams()
    const rating = watch("rating");

    const [addReview] = useAddReviewMutation()
    const onSubmit = async (data) => {
        try {


            console.log("data", data)
            const response = addReview(data).unwrap();
            console.log("reponse of the review ", response)
            //   await addReview({ bookId, ...data }).unwrap();
            reset({ rating: 5, comment: "" });
            setHoverRating(0);
            alert("Review submitted successfully!");
        } catch (err) {
            console.error("Failed to submit review:", err);
        }
    };

    return (
        <div className="bg-white/30 dark:bg-black/30 backdrop-blur-lg p-6 rounded-3xl shadow-neu max-w-3xl mx-auto mt-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Add Your Review
            </h2>
            <input type="text" {...register("bookId", { required: true })} value={id} readOnly />
            {/* Star Rating */}
            <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                        key={star}
                        className={`w-8 h-8 cursor-pointer transition-colors ${star <= (hoverRating || rating) ? "text-yellow-400" : "text-gray-400 dark:text-gray-600"
                            }`}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setValue("rating", star)}
                    />
                ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Comment Box */}
                <textarea
                    {...register("comment", { required: true })}
                    placeholder="Write your review..."
                    className="w-full p-4 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none resize-none"
                    rows={5}
                />

                {/* Submit Button */}
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    type="submit"

                    className="w-full py-3 bg-teal-400 dark:bg-teal-500 text-white font-semibold rounded-xl hover:bg-teal-500 dark:hover:bg-teal-600 transition"
                >
                    "Submit Review"
                </motion.button>
            </form>
        </div>
    );
};

export default AddBookReview;
