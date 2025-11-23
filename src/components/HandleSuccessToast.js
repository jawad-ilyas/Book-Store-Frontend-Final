import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const handleSuccessToast = (message) => {
    // Show toast
    toast.success(message || "Book deleted successfully!", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
    });

    // Optional delayed action
    setTimeout(() => {
        console.log("Book deleted action after toast");
        // Replace alert with any logic you want
    }, 6000);
};

export default handleSuccessToast;
