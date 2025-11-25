import React from "react";
import {
  UserIcon,
  MapPinIcon,
  ShoppingBagIcon,
  CreditCardIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

const OrderDetailsRow = ({ order }) => {
  const {
    userId,
    items,
    shippingAddress,
    totalAmount,
    paymentMethod,
    paymentStatus,
    orderStatus,
    createdAt,
  } = order;

  return (
    <tr>
      <td colSpan="7" className="p-6 bg-white dark:bg-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* CUSTOMER INFO CARD */}
          <div className="p-5 rounded-xl shadow bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <UserIcon className="w-6 h-6 text-blue-600" />
              <h3 className="font-semibold text-lg">Customer Details</h3>
            </div>

            <p><strong>Name:</strong> {userId?.name}</p>
            <p><strong>Email:</strong> {userId?.email || "N/A"}</p>
            <p><strong>Joined:</strong> {userId?.createdAt ? new Date(userId.createdAt).toDateString() : "N/A"}</p>
          </div>

          {/* PAYMENT DETAILS */}
          <div className="p-5 rounded-xl shadow bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <CreditCardIcon className="w-6 h-6 text-green-600" />
              <h3 className="font-semibold text-lg">Payment Details</h3>
            </div>

            <p><strong>Method:</strong> {paymentMethod}</p>

            <p>
              <strong>Status:</strong>{" "}
              <span
                className={`px-3 py-1 text-sm rounded-lg ${
                  paymentStatus === "Paid"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {paymentStatus}
              </span>
            </p>

            {order?.transactionId && (
              <p><strong>Transaction ID:</strong> {order.transactionId}</p>
            )}
          </div>

          {/* ORDER ITEMS */}
          <div className="p-5 rounded-xl shadow bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 lg:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <ShoppingBagIcon className="w-6 h-6 text-purple-600" />
              <h3 className="font-semibold text-lg">Items Ordered</h3>
            </div>

            <ul className="divide-y divide-gray-300 dark:divide-gray-700">
              {items?.map((item, i) => (
                <li key={i} className="py-3 flex justify-between">
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-100">
                      {item?.bookId?.title}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="font-medium text-gray-700 dark:text-gray-200">
                    ${item.priceAtPurchase}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* SHIPPING ADDRESS */}
          <div className="p-5 rounded-xl shadow bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <MapPinIcon className="w-6 h-6 text-red-600" />
              <h3 className="font-semibold text-lg">Shipping Address</h3>
            </div>

            {shippingAddress ? (
              <>
                <p>{shippingAddress.street}</p>
                <p>{shippingAddress.city}, {shippingAddress.state}</p>
                <p>{shippingAddress.country}</p>
                <p>Postal Code: {shippingAddress.postalCode}</p>
              </>
            ) : (
              <p>No shipping address available</p>
            )}
          </div>

          {/* ORDER SUMMARY */}
          <div className="p-5 rounded-xl shadow bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <ClipboardDocumentListIcon className="w-6 h-6 text-indigo-600" />
              <h3 className="font-semibold text-lg">Order Summary</h3>
            </div>

            <p>
              <strong>Status:</strong>{" "}
              <span
                className={`px-3 py-1 text-sm rounded-lg ${
                  orderStatus === "Delivered"
                    ? "bg-green-100 text-green-700"
                    : orderStatus === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {orderStatus}
              </span>
            </p>

            <p><strong>Total Amount:</strong> ${totalAmount}</p>
            <p><strong>Order Date:</strong> {new Date(createdAt).toDateString()}</p>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default OrderDetailsRow;
