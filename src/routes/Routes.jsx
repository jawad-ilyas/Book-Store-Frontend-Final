import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Pages
import Home from "../pages/Home/Home";
import SearchResultsPage from "../pages/SearchResultsPage/SearchResultsPage";
import BookDetailPage from "../pages/BookDetailPage/BookDetailPage";
import CartPage from "../pages/CartPage/CartPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import OrdersPage from "../pages/OrdersPage/OrdersPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import LoginRegisterPage from "../pages/LoginRegisterPage/LoginRegisterPage";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import AdminBooksPage from "../pages/AdminBooksPage/AdminBooksPage";
import AdminOrdersPage from "../pages/AdminOrdersPage/AdminOrdersPage";
import AdminUsersPage from "../pages/AdminUsersPage/AdminUsersPage";
import NotFound from "../pages/NotFound";
import NewsletterPage from "../pages/NewsletterPage";

// Layout components
import Header from "../components/Header";
import Footer from "../components/Footer";
import ToastComponent from "../components/ToastComponent";
import App from "../App";
import { CreateBanner, CreateCategory } from "../components/admin";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/s", element: <SearchResultsPage /> },
            { path: "/book/:id", element: <BookDetailPage /> },
            { path: "/cart", element: <CartPage /> },
            { path: "/checkout", element: <CheckoutPage /> },
            { path: "/orders", element: <OrdersPage /> },
            { path: "/profile", element: <ProfilePage /> },
            { path: "/login", element: <LoginRegisterPage /> },
            { path: "/newsletter", element: <NewsletterPage /> },
            // Admin routes
            { path: "/admin/dashboard", element: <AdminDashboard /> },
            { path: "/admin/books", element: <AdminBooksPage /> },
            { path: "/admin/orders", element: <AdminOrdersPage /> },
            { path: "/admin/users", element: <AdminUsersPage /> },
            { path: "/admin/createbanner", element: <CreateBanner /> },
            { path: "/admin/createcategory", element: <CreateCategory /> },
            // 404
            { path: "*", element: <NotFound /> },
        ],
    },
]);



export default router;
