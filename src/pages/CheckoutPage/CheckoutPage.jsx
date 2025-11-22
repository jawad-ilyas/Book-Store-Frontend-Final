import BillingForm from "./BillingForm";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";
import { useGetCartQuery } from "../../redux/cart/cartApi";


const CheckoutPage = () => {
  const { data } = useGetCartQuery();
  const cartItems = data?.cartItems?.items || []
  // console.log("books into summary page ", cartItems)
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500 px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
        Checkout
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side: Billing + Payment */}
        <div className="flex-1 flex flex-col gap-6">
          <BillingForm />
          <PaymentMethod cartItems={cartItems} />
        </div>

        {/* Right side: Order Summary */}
        <OrderSummary cartItems={cartItems} />
      </div>
    </div>
  );
};

export default CheckoutPage;
