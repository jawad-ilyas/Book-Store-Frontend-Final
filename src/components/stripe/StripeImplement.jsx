import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: "16px",
      color: "#424770",
      fontWeight: "500",
      "::placeholder": { color: "#aab7c4" },
      letterSpacing: "0.5px",
    },
    invalid: { color: "#9e2146", iconColor: "#9e2146" },
  },
  hidePostalCode: true,
};

const StripeImplement = ({ cartItems, setpaymentMethodReseponse, billingInfo, onPaymentResult }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const amount = cartItems.reduce((acc, item) => acc + item.bookId.price * item.quantity, 0) * 100;
  // console.log("cartItems for stripe:", cartItems);
  // console.log("calculated amount in cents:", amount);
  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setError(null);

    try {
      // 1. Create payment intent on backend
      const { data } = await axios.post("http://localhost:3000/api/payments/create-payment-intent", { amount });

      // 2. Confirm card payment
      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: billingInfo.name,
            email: billingInfo.email,
          },
        },
      });
      setpaymentMethodReseponse(result)
      if (result.error) {
        setError(result.error.message);
        onPaymentResult({ success: false, message: result.error.message });
      } else if (result.paymentIntent.status === "succeeded") {
        onPaymentResult({ success: true });
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      onPaymentResult({ success: false, message: err.response?.data?.message || err.message });
    } finally {
      setIsProcessing(false);
    }
  };
  if (!stripe || !elements) {
    console.warn("Stripe or Elements not loaded yet");
  }
  return (
    <form onSubmit={handlePayment} className="flex flex-col gap-4">
      <div className="p-4 rounded-xl bg-white/50 dark:bg-black/50 shadow-neu">
        <CardElement options={CARD_ELEMENT_OPTIONS} />
      </div>
      <button
        type="submit"
        // disabled={!stripe || isProcessing}
        className="mt-4 px-6 py-3 rounded-xl bg-teal-400 dark:bg-teal-500 text-white font-semibold shadow-neu hover:shadow-neu-hover transition"
      >
        {isProcessing ? "Processing..." : `Pay $${amount / 100}`}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default StripeImplement;
