import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    user: null,
    accessToken: null,
    isAuthorized: false
}


const authSlice = createSlice({

    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { user, accessToken } = action?.payload

            state.user = user
            state.accessToken = accessToken
            state.isAuthorized = true
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("accessToken", accessToken)
        },
        logout: (state, action) => {
            state.user = null
            state.accessToken = null
            state.isAuthorized = false
        }
    }
})

export const { setCredentials ,logout } = authSlice.actions
export default authSlice.reducer