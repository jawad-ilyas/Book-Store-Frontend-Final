import { useState } from "react";
import BookReviews from "./BookReviews";
import SimilarBooks from "./SimilarBooks";

const BookTabs = ({ book }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section className="px-6 py-12">
      <div className="flex gap-4 mb-6">
        {["description", "reviews", "similar"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl font-semibold ${
              activeTab === tab
                ? "bg-teal-400 dark:bg-teal-500 text-white shadow-neu"
                : "bg-white/30 dark:bg-black/30 text-gray-900 dark:text-gray-100 shadow-neu hover:shadow-neu-hover"
            } transition`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div>
        {activeTab === "description" && (
          <div className="bg-white/30 dark:bg-black/30 backdrop-blur-lg rounded-2xl shadow-neu p-6 text-gray-900 dark:text-gray-100">
            <p>{book.description}</p>
          </div>
        )}
        {activeTab === "reviews" && <BookReviews reviews={book.reviews} />}
        {activeTab === "similar" && <SimilarBooks books={book.similarBooks} />}
      </div>
    </section>
  );
};

export default BookTabs;
