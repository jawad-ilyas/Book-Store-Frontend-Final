import React, { useEffect, useState } from "react";

import CartList from "./CartList";
import CartSummary from "./CartSummary";
import { useGetCartQuery, useRemoveFromCartMutation, useUpdateCartItemMutation } from "../../redux/cart/cartApi";

const CartPage = () => {


  const { data } = useGetCartQuery();
  const [removeFromCart] = useRemoveFromCartMutation()
  const [updateCartItem] = useUpdateCartItemMutation()
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (data?.cartItems?.items) {
      setCartItems(data.cartItems.items);
    }
  }, [data]);
  let debounceTimer;

  const handleQuantityChange = (id, qty, bookId) => {
    // console.log("item id into quanity change ", id, qty, bookId)
    setCartItems(prev =>
      prev.map(item =>
        item._id === id ? { ...item, quantity: Number(qty) } : item
      )
    );


    // clear previous timer
    clearTimeout(debounceTimer);

    // start new timer
    debounceTimer = setTimeout(() => {
      updateCartItem({ bookId: bookId, quantity: Number(qty) });
    }, 2000); // 600ms delay
  };
  const handleRemove = (id) => {
    removeFromCart({ bookId: id })
  };

  const handleCheckout = () => {

    alert("Proceeding to checkout!");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500 px-6 py-12 flex flex-col md:flex-row gap-8">
      {/* Cart Items */}
      <div className="flex-1">
        <CartList
          cartItems={cartItems}
          onQuantityChange={handleQuantityChange}
          onRemove={handleRemove}
        />
      </div>

      {/* Cart Summary */}
      <CartSummary cartItems={cartItems} onCheckout={handleCheckout} />
    </div>
  );
};

export default CartPage;
