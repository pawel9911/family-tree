import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Lock } from "lucide-react";
import type { SubmitEvent } from "react";
import { Button } from "~/shared/ui";
import { usePostPaymentsIntent } from "../../api/usePostPaymentsIntent";

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
          return_url: `${globalThis.location.origin}/payments/confirm`,
        },
      });
    } catch (err) {
      const error = err as Error;
      console.error(error.message);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-primary italic uppercase tracking-tight ml-2">
            Podsumowanie zamówienia
          </h2>
          <p className="py-4">Karta podsumowania</p>
          <div className="p-4 rounded-lg bg-gray-50 border border-gray-100 text-xs text-gray-500 leading-relaxed">
            Klikając "Potwierdzam zakup", zgadzasz się na natychmiastowe
            przypisanie kredytów do Twojego konta. Transakcja jest obsługiwana
            przez Stripe. Pamiętaj, że ze względu na cyfrowy charakter usługi,
            prawo do odstąpienia od umowy jest ograniczone po wykorzystaniu
            kredytów.
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-primary italic uppercase tracking-tight mb-6 ml-2">
            Płatność
          </h2>
          <div className="w-full p-8 border border-gray-100 shadow-xl rounded-xl bg-white dark:bg-transparent">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary">
                <Lock className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary italic uppercase tracking-tight">
                  Finalizacja
                </h3>
                <p className="text-sm font-semibold opacity-70">
                  Bezpieczna płatność
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="min-h-50">
                <PaymentElement options={{ layout: "tabs" }} />
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-bold uppercase tracking-wider">
                    Suma:
                  </span>
                  <span className="text-2xl font-extrabold text-primary">
                    50,00 PLN
                  </span>
                </div>

                <Button
                  size="lg"
                  className="w-full h-12 text-md font-bold transition-all hover:scale-[1.02] active:scale-[0.98]"
                  type="submit"
                  disabled={isPending || !stripe || !elements}
                >
                  {isPending ? "Przetwarzanie..." : "Potwierdzam zakup"}
                </Button>

                <p className="mt-4 text-center text-[10px] text-gray-400 uppercase tracking-widest font-medium">
                  Szyfrowanie SSL / Stripe Secured
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
