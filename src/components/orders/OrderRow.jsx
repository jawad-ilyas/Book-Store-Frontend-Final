import React, { useState } from "react";
import OrderStatusBadge from "./OrderStatusBadge";
import OrderStatusUpdate from "./OrderStatusUpdate";
import OrderDetailsRow from "./OrderDetailsRow";

const OrderRow = ({ order, onStatusChange }) => {
  const [showDetails, setShowDetails] = useState(false);
  // console.log("order row ", order?._id, order)
  return (
    <>
      <tr className="border-b dark:border-gray-700">
        <td className="px-6 py-4">{order._id}</td>
        <td className="px-6 py-4">{order?.userId?.name}</td>
        <td className="px-6 py-4">
          {new Date(order.createdAt).toDateString()}
        </td>
        <td className="px-6 py-4">${order.totalAmount}</td>



        <td className="px-6 py-4 flex items-center gap-3">
          <OrderStatusUpdate
            currentStatus={order?.orderStatus}
            onChange={(status) => onStatusChange(order?._id, status)}
          />
        </td>
        <td className="px-6 py-4">
          <OrderStatusBadge status={order.orderStatus} />
        </td>
        <td className="px-6 py-4 flex items-center gap-3">
          <button
            onClick={() => setShowDetails((prev) => !prev)}
            className="px-3 py-1 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
          >
            {showDetails ? "Hide" : "View"} Details
          </button>
        </td>
      </tr>
      {showDetails && <OrderDetailsRow order={order} />}

      {/* DETAILS DROPDOWN */}
    </>
  );
};

export default OrderRow;
