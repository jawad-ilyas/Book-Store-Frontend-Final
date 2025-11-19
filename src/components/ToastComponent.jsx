import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const ToastComponent = () => {
    return (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"

        />
    )
}

export default ToastComponent
