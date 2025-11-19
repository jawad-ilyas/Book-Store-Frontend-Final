import React from "react";
import SearchHeader from "./SearchHeader";
import FiltersSidebar from "./FiltersSidebar";
import BooksGrid from "./BooksGrid";
import Pagination from "./Pagination";
import { useGetBooksQuery } from "../../redux/book/bookApi.js"
import { useLocation } from "react-router-dom";

const useQuery = () => new URLSearchParams(useLocation().search)

const SearchResultsPage = () => {
  const query = useQuery();
  const searchTerm = query.get("q") || "";

  console.log("query data  ", query)
  console.log("query data  searchTerm", searchTerm)

  // this query is for the show books to user 
  const { data, isError, isLoading } = useGetBooksQuery({ search: searchTerm })

  const books = data?.books || []
  console.log("books data", books)
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500 px-6 py-12">
      {/* Search input and sorting */}
      <SearchHeader initialSearch={searchTerm} />

      {/* Main content */}
      <div className="mt-8 flex flex-col md:flex-row gap-8">
        {/* Filters sidebar */}
        <div className="md:w-1/4">
          <FiltersSidebar />
        </div>

        {/* Books grid */}
        <div className="flex-1">
          <BooksGrid books={books} />
          <div className="mt-8">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
