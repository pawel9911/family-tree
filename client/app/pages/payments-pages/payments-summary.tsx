import { useSearchParams } from "react-router";
import { PaymentsForm, PaymentsSummary } from "~/features/payments";
import { usePaymentVariant } from "~/features/payments/hooks";
import type { PaymentsVariant } from "~/features/payments/types";

const PaymentsSummaryPage = () => {
  const [searchParams] = useSearchParams();
  const variantKey =
    (searchParams.get("variant") as PaymentsVariant) || "STANDARD";
  const variantData = usePaymentVariant(variantKey);

  return (
    <div className="container my-24">
      <div className="grid grid-cols-5 gap-8">
        <PaymentsSummary data={variantData} />
        <PaymentsForm data={variantData} />
      </div>
    </div>
  );
};

export default PaymentsSummaryPage;
