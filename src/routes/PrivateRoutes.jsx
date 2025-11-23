import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = ({ children, adminOnly = false }) => {
    const { user, isAuthorized } = useSelector((state) => state.auth);

    // fallback to localStorage if Redux is empty (optional)
    const token = localStorage.getItem("accessToken");
    const localUser = JSON.parse(localStorage.getItem("user"));

    const authorized = isAuthorized || (token && localUser);


    if (!authorized) return <Navigate to="/login" replace />;

    // Admin check
    if (adminOnly && localUser?.role !== "admin") {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default PrivateRoutes;
