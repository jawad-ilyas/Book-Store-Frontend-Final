import React from 'react'
import { motion } from "framer-motion";
import { useAddToCartMutation } from "../redux/cart/cartApi"
import handleSuccessToast from './HandleSuccessToast';
const AddToCartBtn = ({ bookId }) => {
    // console.log("add this bookid into cart ", bookId)
    const [addToCart] = useAddToCartMutation(bookId);
    const handleAddToCart = async () => {
        // console.log("bookid ", bookId)
        const response = await addToCart({ bookId })
        console.log("response of the cart", response)
        if (response?.data?.success) {
            handleSuccessToast("Items is Add To Cart SuccessFully")
        }

    }
    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="px-4 py-2 rounded-xl bg-teal-400 dark:bg-teal-500 text-white font-semibold shadow-neu hover:shadow-neu-hover transition"
        >
            Add to Cart
        </motion.button>

    )
}

export default AddToCartBtn
