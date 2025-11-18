import OrderCard from "./OrderCard";

const OrdersList = ({ orders }) => {
  return (
    <div>
      {orders.length === 0 ? (
        <p className="text-gray-700 dark:text-gray-300 text-center mt-8">
          You have no orders yet.
        </p>
      ) : (
        orders.map((order) => <OrderCard key={order.id} order={order} />)
      )}
    </div>
  );
};

export default OrdersList;
