import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes.jsx';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <Elements stripe={stripePromise}>
      <RouterProvider router={router} />
    </Elements>
  </Provider>

);
