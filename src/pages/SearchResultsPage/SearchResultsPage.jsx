import React from "react";
import SearchHeader from "./SearchHeader";
import FiltersSidebar from "./FiltersSidebar";
import BooksGrid from "./BooksGrid";
import Pagination from "./Pagination";

const SearchResultsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500 px-6 py-12">
      {/* Search input and sorting */}
      <SearchHeader />

      {/* Main content */}
      <div className="mt-8 flex flex-col md:flex-row gap-8">
        {/* Filters sidebar */}
        <div className="md:w-1/4">
          <FiltersSidebar />
        </div>

        {/* Books grid */}
        <div className="flex-1">
          <BooksGrid />
          <div className="mt-8">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
