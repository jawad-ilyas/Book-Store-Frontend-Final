import React, { useEffect, useState } from "react";

import { books } from "../../data"; // Import from single data file
import CartList from "./CartList";
import CartSummary from "./CartSummary";
import { useGetCartQuery } from "../../redux/cart/cartApi";

const CartPage = () => {
  // Example cart state 
  // const [cartItems, setCartItems] = useState(
  //   books.map((book) => ({ ...book, quantity: 1 })) // demo: all books in cart initially
  // );


  const { data } = useGetCartQuery();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (data?.cartItems?.items) {
      setCartItems(data.cartItems.items);
    }
  }, [data]);

  const handleQuantityChange = (id, qty) => {
    setCartItems(prev =>
      prev.map(item =>
        item._id === id ? { ...item, quantity: Number(qty) } : item
      )
    );
  };
  const handleRemove = (id) => {
    // setCartItems((prev) => prev.filter((item) => item.id !== id));
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
