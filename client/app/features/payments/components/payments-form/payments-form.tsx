import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button } from "~/shared/ui";
import { usePostPaymentsIntent } from "../../api/usePostPaymentsIntent";
import type { SubmitEvent } from "react";

export const PaymentsForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { mutateAsync: postPaymentsIntent, isPending } =
    usePostPaymentsIntent();

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    try {
      const { error: submitError } = await elements.submit();
      if (submitError) throw new Error(submitError.message);

      const re = await postPaymentsIntent({
        payload: { amount: 5000 },
      });

      const { clientSecret } = re;

      await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${globalThis.location.origin}/payments/success`,
        },
      });
    } catch (err) {
      const error = err as Error;
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <div className="flex justify-center">
        <Button
          size="lg"
          className="mx-auto my-6"
          type="submit"
          disabled={isPending || !stripe || !elements}
        >
          {isPending ? "Przetwarzanie..." : "Zapłać"}
        </Button>
      </div>
    </form>
  );
};
