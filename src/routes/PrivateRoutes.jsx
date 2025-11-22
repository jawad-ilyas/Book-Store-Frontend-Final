import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = ({ children }) => {
    // const { isAuthorized, user } = useSelector((state) => state.auth);
    const token = localStorage.getItem("accessToken")
    let isAuthorized;
    if (token) {
        isAuthorized = true
    }
    // Check if user is logged in and has a valid role
    if (isAuthorized) {
        return children;
    }

    // Redirect to login if not authorized
    return <Navigate to="/login" replace />;
};

export default PrivateRoutes;
