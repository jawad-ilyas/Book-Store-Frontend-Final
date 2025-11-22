import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogoutMutation } from '../redux/user/userApi';
import { useDispatch } from 'react-redux';
import { logout as LogoutAuthSlice } from "../redux/auth/authSlice"
const LogoutBtn = () => {
    const [logout] = useLogoutMutation()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = async () => {
   
        dispatch(LogoutAuthSlice())
        const response = await logout()
        if (response) {
            navigate("/login")
        }

    }
    return (
        <div>
            <button onClick={handleLogout} className="w-full text-left text-red-500 dark:text-red-400 hover:underline">
                Logout
            </button>
        </div>
    )
}

export default LogoutBtn
