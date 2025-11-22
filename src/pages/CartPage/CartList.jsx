import CartItem from "./CartItem";

const CartList = ({ cartItems, onQuantityChange, onRemove }) => {
  return (
    <div>
      {cartItems?.length === 0 ? (
        <p className="text-gray-700 dark:text-gray-300 text-center mt-8">
          Your cart is empty.
        </p>
      ) : (
        cartItems?.map((item) => (
    
          <CartItem
            key={item._id}
            item={item?.bookId}
            itemId={item?._id}
            quantity={item.quantity}
            onQuantityChange={onQuantityChange}
            onRemove={onRemove}
          />
        ))
      )}
    </div>
  );
};

export default CartList;
