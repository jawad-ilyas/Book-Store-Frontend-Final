import React, { useState } from 'react'
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CARD_ELEMENT_OPTIONS = { style: { base: { fontSize: "16px", color: "#424770", "::placeholder": { color: "#aab7c4" }, }, invalid: { color: "#9e2146" }, }, hidePostalCode: true, };
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

            if (result.error) {
                console.error("Stripe error:", result.error);
                setError(result.error.message);
                setSuccess(false);
            } else if (result.paymentIntent.status === "succeeded") {
                setSuccess(true);
                setError(null);
            }
        } catch (err) {
            console.error("Backend error:", err.response?.data || err.message);
            setError(err.response?.data?.message || "Payment failed");
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement options={CARD_ELEMENT_OPTIONS} />
            <button type="submit" disabled={!stripe || isProcessing}>
                {isProcessing ? "Processing..." : `Pay $${amount / 100}`}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>Payment successful!</p>}
        </form>
    );
};
export default StripeImplement