import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: "18px",
      color: "#424770",
      fontWeight: "500",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      "::placeholder": { color: "#aab7c4", opacity: 1 },
      letterSpacing: "0.5px",
    },
    invalid: { color: "#9e2146", iconColor: "#9e2146" },
  },
  hidePostalCode: true,
};

const StripeImplement = ({ cartItems }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const amount = cartItems.reduce((acc, item) => acc + 10 * 10, 0) * 100;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setError(null);

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/payments/create-payment-intent",
        { amount }
      );

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      console.log("result of the card " , result)
      if (result.error) {
        setError(result.error.message);
        setSuccess(false);
      } else if (result.paymentIntent.status === "succeeded") {
        setSuccess(true);
        setError(null);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Payment failed");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "20px auto" }}>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "15px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          background: "linear-gradient(135deg, #f9f9f9, #e0e0e0)",
        }}
      >
        <CardElement options={CARD_ELEMENT_OPTIONS} />
      </div>
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        style={{
          marginTop: "20px",
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#fff",
          background: "#5469d4",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        {isProcessing ? "Processing..." : `Pay $${amount / 100}`}
      </button>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      {success && <p style={{ color: "green", marginTop: "10px" }}>Payment successful!</p>}
    </form>
  );
};

export default StripeImplement;
