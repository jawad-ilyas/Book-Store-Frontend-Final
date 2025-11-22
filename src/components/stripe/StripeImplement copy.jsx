import React, { useState } from 'react'
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            fontSize: "16px",
            color: "#424770",
            "::placeholder": { color: "#aab7c4" },
        },
        invalid: { color: "#9e2146" },
    },
    hidePostalCode: true,
};
const StripeImplement = ({ cartItems }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    if (!stripe || !elements) return <div>Loading Stripe…</div>;

    const getItemsPayload = () => cartItems.map(it => ({
        productId: it?.bookId.id,
        name: it?.bookId?.title,
        price: Math.round(it?.bookIdprice * 100), // convert dollars -> cents
        qty: it.qty
    }));
    const user = JSON.parse(localStorage.getItem("user"))
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        setLoading(true);
        setMessage(null);

        try {
            // 1) call backend to create PaymentIntent
            const resp = await axios.post(
                `http://localhost:3000/api/payments/create-payment-intent`,
                { items: getItemsPayload(), email: user?.email },
                { headers: { "Content-Type": "application/json" } }
            );
            console.log("response of the stripe ", resp)
            const { clientSecret, orderId } = resp.data;

            // 2) confirm the card payment
            const cardElement = elements.getElement(CardElement);
            const confirmResult = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                    billing_details: { email: user?.email }
                }
            });

            if (confirmResult.error) {
                // Show error to customer
                setMessage(confirmResult.error.message);
                // Optionally call backend to mark payment failed (or let webhook handle it)
            } else if (confirmResult.paymentIntent && confirmResult.paymentIntent.status === "succeeded") {
                // Payment successful — you can show a success message to the customer
                setMessage("Payment succeeded! Thank you.");
                // Optionally call backend to update order status (webhook will also update)
                // await axios.post(`${API}/orders/confirm`, { orderId, paymentIntentId: confirmResult.paymentIntent.id });
            } else {
                setMessage("Unexpected payment status: " + (confirmResult.paymentIntent?.status ?? ""));
            }
        } catch (err) {
            console.error(err);
            setMessage(err.response?.data?.error || err.message || "Payment failed");
        } finally {
            setLoading(false);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <CardElement options={CARD_ELEMENT_OPTIONS} />
            <button type="submit" disabled={loading}>
                {loading ? "Processing…" : "Pay"}
            </button>
            {message && <div>{message}</div>}
        </form>
    )
}

export default StripeImplement
