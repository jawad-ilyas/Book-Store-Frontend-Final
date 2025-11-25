import SearchHeader from "./SearchHeader";
import FiltersSidebar from "./FiltersSidebar";
import BooksGrid from "./BooksGrid";
import Pagination from "./Pagination";
import { useGetBooksQuery } from "../../redux/book/bookApi.js"
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";

const useQuery = () => new URLSearchParams(useLocation().search)

const SearchResultsPage = () => {
  const { categorySearch } = useParams();
  const [category, setCategory] = useState([]);
  const [minRating, setMinRating] = useState(-1)
  const query = useQuery();
  const searchTerm = query.get("q") || "";
  let categoryTerm = query.get("categoryq") || "";
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  // console.log("query data  ", query)
  // console.log("query data  searchTerm", searchTerm)

  // this query is for the show books to user 
  const { data, isError, isLoading } = useGetBooksQuery({
    search: searchTerm, category: category.join(",") || categoryTerm, minRating: minRating,
    page: currentPage,
    limit: itemsPerPage,
  })

  const books = data?.books || []
  // console.log("books data", books)
  // console.log("category selected and print on search page ", category)
  // console.log("min rating is thsi ", minRating)


  // State for sorting
  const [sort, setSort] = useState("relevance");

  // Derived sorted books (frontend sorting)
  const sortedBooks = [...books].sort((a, b) => {
    switch (sort) {
      case "price-low-high":
        return a.price - b.price;
      case "price-high-low":
        return b.price - a.price;
      default:
        return 0; // "relevance" or default order
    }
  });
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500 px-6 py-12">
      {/* Search input and sorting */}
      <SearchHeader initialSearch={searchTerm} sort={sort} setSort={setSort} />

      {/* Main content */}
      <div className="mt-8 flex flex-col md:flex-row gap-8">
        {/* Filters sidebar */}
        <div className="md:w-1/4">
          <FiltersSidebar category={category} setCategory={setCategory} setMinRating={setMinRating} />
        </div>

        {/* Books grid */}
        <div className="flex-1">
          <BooksGrid books={sortedBooks} />
          <div className="mt-8">
            <Pagination
              currentPage={currentPage}
              totalPages={data?.totalPages || 1}
              onPageChange={setCurrentPage}

            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
