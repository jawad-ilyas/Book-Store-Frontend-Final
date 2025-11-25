import React, { useState } from "react";
import handleSuccessToast from "./HandleSuccessToast";
import { toast } from "react-toastify";
import ConfirmModal from "./ConfirmModal";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useDeleteBannerMutation } from "../redux/banner/bannerApi";

const HandleDeleteBannerBtn = ({ bannerId }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteBanner] = useDeleteBannerMutation(bannerId)
    const handleDelete = async () => {
        console.log("handle delete banner page ", bannerId)
        try {
            const result = await deleteBanner(bannerId).unwrap();
            handleSuccessToast(result.message || "Banner deleted successfully!");
            setIsModalOpen(false);
        } catch (err) {
            toast.error(err?.data?.message || "Failed to delete Banner", {
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
                className="flex items-center gap-1 px-3 py-1 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold"
            >
                <TrashIcon className="w-4 h-4" />
                Delete
            </button>
            {/* Confirm Modal */}
            <ConfirmModal
                isOpen={isModalOpen}
                message="Are you sure you want to delete this Banner?"
                onConfirm={handleDelete}
                onCancel={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default HandleDeleteBannerBtn;
