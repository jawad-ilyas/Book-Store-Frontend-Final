import React, { useState } from "react";
import BooksList from "../../components/BooksList";
import BookFormModal from "../../components/BookFormModal";
import { books as initialBooks } from "../../data";
import AdminLayout from "../../components/AdminLayout";
import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../../redux/book/bookApi";
import Pagination from "../SearchResultsPage/Pagination";
import BooksGrid from "../SearchResultsPage/BooksGrid";

const AdminBooksPage = () => {
  // const [books, setBooks] = useState(initialBooks);

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  // console.log("query data  ", query)
  // console.log("query data  searchTerm", searchTerm)

  // this query is for the show books to user 
  const { data, isError, isLoading } = useGetBooksQuery({
    search: "",
    category: "",
    minRating: -1,
    page: currentPage,
    limit: itemsPerPage,
  })

  const books = data?.books || []



  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500 px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Books Management</h1>

        <div className="flex justify-end mb-6">
          <button
            className="px-6 py-3 rounded-xl bg-teal-400 dark:bg-teal-500 text-white font-semibold shadow-neu hover:shadow-neu-hover transition"

          >
            <Link to="/admin/books/add" >Add New Book</Link>
          </button>
        </div>

        {/* <BooksList books={books} /> */}
        <BooksGrid books={books} />

        <div className="mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={data?.totalPages || 1}
            onPageChange={setCurrentPage}

          />
        </div>

      </div>
    </AdminLayout>
  );
};

export default AdminBooksPage;
