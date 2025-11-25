import React from "react";
import HeroBanner from "./HeroBanner";
import Categories from "./Categories";
import TopSellers from "./TopSellers";
import RecommendedBooks from "./RecommendedBooks";
import NewsletterSignup from "./NewsletterSignup";
import CreateCategory from "../../components/admin/category/CreateCategory";

const Home = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      {/* Hero / Main Banner */}
      <HeroBanner />

      {/* Book Categories */}
      <Categories />
      {/* Top Sellers Section */}
      <TopSellers />

      {/* Recommended / Curated Books */}
      {/* <RecommendedBooks /> */}

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </div>
  );
};

export default Home;
