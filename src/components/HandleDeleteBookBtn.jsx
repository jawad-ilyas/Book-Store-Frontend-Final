import React, { useState } from "react";
import { useDeleteBookMutation } from "../redux/book/bookApi";
import handleSuccessToast from "./HandleSuccessToast";
import { toast } from "react-toastify";
import ConfirmModal from "./ConfirmModal";

const HandleDeleteBookBtn = ({ bookId }) => {
    const [deleteBook] = useDeleteBookMutation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDelete = async () => {
        try {
            const result = await deleteBook(bookId).unwrap();
            handleSuccessToast(result.message || "Book deleted successfully!");
            setIsModalOpen(false);
        } catch (err) {
            toast.error(err?.data?.message || "Failed to delete book", {
                position: "top-right",
                autoClose: 5000,
                theme: "dark",
            });
        }
    };

    return (
        <>
            {/* Delete Button */}
            <button
                onClick={() => setIsModalOpen(true)}
                className="px-3 py-1 rounded-xl bg-red-400 dark:bg-red-500 text-white font-semibold shadow-neu hover:shadow-neu-hover transition"
            >
                Delete
            </button>

            {/* Confirm Modal */}
            <ConfirmModal
                isOpen={isModalOpen}
                message="Are you sure you want to delete this book?"
                onConfirm={handleDelete}
                onCancel={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default HandleDeleteBookBtn;
