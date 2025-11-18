import { StarIcon } from "@heroicons/react/24/solid";

const BookReviews = ({ reviews }) => {
  return (
    <div className="grid gap-4">
      {reviews.map((review, idx) => (
        <div
          key={idx}
          className="bg-white/30 dark:bg-black/30 backdrop-blur-lg rounded-2xl shadow-neu p-4"
        >
          <div className="flex items-center mb-2">
            <span className="font-semibold text-gray-900 dark:text-gray-100 mr-2">
              {review.user}
            </span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`w-5 h-5 ${
                    i < review.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default BookReviews;
