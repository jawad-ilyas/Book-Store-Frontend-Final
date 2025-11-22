import React from "react";
import { motion } from "framer-motion";
import { useGetReviewsByUserQuery } from "../../redux/reviews/reviewsApi";

const UserReviews = () => {

  const { data } = useGetReviewsByUserQuery();
  const reviews = data?.userReview || []
  return (
    <div className="bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-neu rounded-2xl p-6 flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">My Reviews</h2>

      {reviews.length === 0 ? (
        <p className="text-gray-700 dark:text-gray-300 text-center">You have not written any reviews yet.</p>
      ) : (
        reviews.map((review, index) => (
          <motion.div
            key={index}
            className="bg-white/50 dark:bg-black/50 rounded-xl p-4 shadow-neu"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-gray-900 dark:text-gray-100 font-semibold">{review.bookTitle}</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">{review.comment}</p>
            <p className="text-yellow-400 font-semibold">Rating: {review.rating} ⭐</p>
          </motion.div>
        ))
      )}
    </div>
  );
};

export default UserReviews;
