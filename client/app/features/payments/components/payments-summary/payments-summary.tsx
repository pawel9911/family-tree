import { Check, Package } from "lucide-react";
import { usePaymentVariant } from "../../hooks";

interface PaymentsSummaryProps {
  data: ReturnType<typeof usePaymentVariant>;
}

export const PaymentsSummary = ({
  data: { checklist, credits, description, formattedPrice, subTitle, title },
}: PaymentsSummaryProps) => {
  return (
    <div className="col-span-3 space-y-6">
      <h2 className="text-2xl font-bold text-primary italic uppercase tracking-tight ml-2">
        Podsumowanie zamówienia
      </h2>
      <div className="flex flex-col md:flex-row w-full border border-gray-100 shadow-xl rounded-xl overflow-hidden bg-white">
        <div className="bg-primary p-8 flex flex-col justify-center items-center text-white md:w-1/3">
          <Package size={48} className="mb-4 opacity-80" />
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] opacity-70">
            Wybrany pakiet
          </h4>
          <span className="text-3xl font-black italic uppercase">{title}</span>
        </div>

        <div className="p-8 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-extrabold text-primary">
                  {credits} Kredytów
                </h3>
                <p className="text-sm text-gray-500 font-medium">{subTitle}</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-gray-400 uppercase">
                  Cena do zapłaty
                </span>
                <p className="text-2xl font-black text-primary">
                  {formattedPrice}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-6 italic">{description}</p>

            <div className="grid gap-y-3">
              {checklist.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <Check size={16} className="text-primary shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 rounded-lg bg-gray-50 border border-gray-100 text-xs text-gray-500 leading-relaxed">
        Klikając "Potwierdzam zakup", zgadzasz się na natychmiastowe przypisanie
        kredytów do Twojego konta. Transakcja jest obsługiwana przez Stripe.
        Pamiętaj, że ze względu na cyfrowy charakter usługi, prawo do
        odstąpienia od umowy jest ograniczone po wykorzystaniu kredytów.
      </div>
    </div>
  );
};
