// CheckoutPage.jsx
import React, { useEffect, useState } from "react";
import { useGetCartQuery } from "../../redux/cart/cartApi";
import BillingForm from "./BillingForm";
import PaymentMethod from "./PaymentMethod";
import OrderSummary from "./OrderSummary";
import { useCreateAddressMutation, useGetAddressesQuery } from "../../redux/address/addressApi";
import { useCreateOrderMutation } from "../../redux/order/orderApi";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { data } = useGetCartQuery();
  const cartItems = data?.cartItems?.items || [];
  const navigate = useNavigate();
  const { data: userAddressData } = useGetAddressesQuery()

  // State to store billing info
  const [billingInfo, setBillingInfo] = useState(null);

  // Selected payment method
  const [paymentMethod, setPaymentMethod] = useState("");

  // Stripe payment status
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentMethodReseponse, setpaymentMethodReseponse] = useState(false);

  // General status (loading, success, error)
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  // Handler to confirm order
  const [createAddress] = useCreateAddressMutation();
  const [createOrder] = useCreateOrderMutation()
  const handleConfirmOrder = async () => {

    if (!billingInfo) return alert("Please fill billing information.");
    if (!paymentMethod) return alert("Please select a payment method.");
    if ((paymentMethod === "stripe" || paymentMethod === "card") && !paymentSuccess) {
      return alert("Please complete the payment before confirming the order.");
    }

    setStatus({ loading: true, success: null, error: null });
    // console.log("addressId", billingInfo)
    // console.log("paymentMethod", paymentMethod)
    // console.log("provider", paymentMethod)
    // console.log("transactionId", paymentMethodReseponse?.payment_method)

    const resonponse = await createAddress(billingInfo)
    console.log("response of the data is this ", resonponse?.data?.address?._id)

    const data = {
      addressId: resonponse?.data?.address?._id,
      paymentMethod: paymentMethod,
      provider: paymentMethod,
      transactionId: paymentMethodReseponse?.payment_method || null
    }
    try {
      // Simulate order creation
      const orderResponse = await createOrder(data)
      // await new Promise((resolve) => setTimeout(resolve, 1500));
      // console.log("response of the order is this ", orderResponse)

      if (orderResponse?.success) {
        navigate("/profile")
      }
      // setStatus({ loading: false, success: "Order placed successfully!", error: null });
      // alert("Order placed successfully!");
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message || "Something went wrong" });
    }
  };
  useEffect(() => {
    if (cartItems.length === 0) navigate("/");
  }, [cartItems, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500 px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">Checkout</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side: Billing + Payment */}
        <div className="flex-1 flex flex-col gap-6">
          <BillingForm onSubmitForm={setBillingInfo} />

          <PaymentMethod
            cartItems={cartItems}
            selectedMethod={paymentMethod}
            setSelectedMethod={setPaymentMethod}
            billingInfo={billingInfo}
            setpaymentMethodReseponse={setpaymentMethodReseponse}
            setPaymentSuccess={setPaymentSuccess}
            setStatus={setStatus}
          />

          {status.error && <p className="text-red-500 mt-2">{status.error}</p>}
          {status.success && <p className="text-green-500 mt-2">{status.success}</p>}
        </div>

        {/* Right side: Order Summary */}
        <OrderSummary
          cartItems={cartItems}
          onConfirm={handleConfirmOrder}
          loading={status.loading}
        />
      </div>
    </div>
  );
};

export default CheckoutPage;
