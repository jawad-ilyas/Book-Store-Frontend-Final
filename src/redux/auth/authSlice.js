import { createSlice } from "@reduxjs/toolkit";



const userFromStorage = JSON.parse(localStorage.getItem("user"));
const tokenFromStorage = localStorage.getItem("accessToken");

const initialState = {
    user: userFromStorage || null,
    accessToken: tokenFromStorage || null,
    isAuthorized: !!tokenFromStorage, // true if token exists
};

const authSlice = createSlice({

    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { user, accessToken } = action?.payload
            console.log("user into user auth ", user)
            console.log("user into user accessToken ", accessToken)
            state.user = user
            state.accessToken = accessToken
            state.isAuthorized = true
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("accessToken", accessToken)
        },
        logout: (state, action) => {
            state.user = null;
            state.accessToken = null;
            state.isAuthorized = false;
            localStorage.removeItem("user");
            localStorage.removeItem("accessToken"); // add this
        }
    }
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer