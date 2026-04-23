import { loadStripe, type StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { PaymentsForm } from "./payments-form";
import { usePaymentVariant } from "../../hooks";

const stripe = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

interface PaymentsFormReaderProps {
  data: ReturnType<typeof usePaymentVariant>;
}

const PaymentsFormReader = ({ data }: PaymentsFormReaderProps) => {
  const options: StripeElementsOptions = {
    mode: "payment",
    amount: data.price,
    currency: "pln",
    appearance: {
      inputs: "condensed",
      labels: "floating",
    },
  };

  return (
    <Elements stripe={stripe} options={options}>
      <PaymentsForm data={data} />
    </Elements>
  );
};

export default PaymentsFormReader;
