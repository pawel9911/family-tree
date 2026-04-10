import { loadStripe, type StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { PaymentsForm } from "./payments-form";

const stripe = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const options: StripeElementsOptions = {
  mode: "payment",
  amount: 5000,
  currency: "usd",
  appearance: {
    inputs: "condensed",
    labels: "floating",
  },
};

const PaymentsFormReader = () => {
  return (
    <Elements stripe={stripe} options={options}>
      <PaymentsForm />
    </Elements>
  );
};

export default PaymentsFormReader;
