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
import { AddBook, CreateBanner, CreateCategory } from "../components/admin";
import PrivateRoutes from "./PrivateRoutes";
import UpdateBook from "../components/admin/book/UpdateBook";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            // Public routes
            { path: "/", element: <Home /> },
            { path: "/search", element: <SearchResultsPage /> },
            { path: "/book/:id", element: <BookDetailPage /> },
            { path: "/login", element: <LoginRegisterPage /> },
            { path: "/newsletter", element: <NewsletterPage /> },


            // ===========================
            // 🔒 Protected User Routes
            // ===========================
            {
                element: <PrivateRoutes />,   // Wrap once — cleaner!
                children: [
                    { path: "/profile", element: <ProfilePage /> },
                    { path: "/cart", element: <CartPage /> },
                    { path: "/checkout", element: <CheckoutPage /> },
                    { path: "/orders", element: <OrdersPage /> },
                    { path: "/profile", element: <ProfilePage /> },
                ]
            },

            // ===========================
            // 🔒 Protected Admin Routes
            // (Should ideally check admin role inside PrivateRoutes)
            // ===========================
            {
                element: <PrivateRoutes adminOnly={true} />,
                children: [
                    { path: "/admin/dashboard", element: <AdminDashboard /> },
                    { path: "/admin/books", element: <AdminBooksPage /> },
                    { path: "/admin/books/add", element: <AddBook /> },
                    { path: "/admin/books/update/:id", element: <UpdateBook /> },
                    { path: "/admin/orders", element: <AdminOrdersPage /> },
                    { path: "/admin/users", element: <AdminUsersPage /> },
                    { path: "/admin/banners/add", element: <CreateBanner /> },
                    { path: "/admin/createcategory", element: <CreateCategory /> },
                ]
            },

            // 404 Page
            { path: "*", element: <NotFound /> },
        ],
    },
]);




export default router;
