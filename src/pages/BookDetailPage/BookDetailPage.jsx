import React from "react";
import { books } from "../../data"; // import single source of data
import BookTabs from "./BookTabs";
import BookDetailHeader from "./BookDetailHeader";

const BookDetailPage = () => {
    // For demo, pick the first book from data
    const book = books[0];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
            {/* Header: book cover, title, author, price, add to cart/wishlist */}
            <BookDetailHeader book={book} />

            {/* Tabs: Description, Reviews, Similar Books */}
            <BookTabs book={book} />
        </div>
    );
};

export default BookDetailPage;
