import { AlertCircle, CircleCheckBig, Loader2 } from "lucide-react";
import { useEffect } from "react";
import { Link, Navigate, useSearchParams } from "react-router";
import { usePostPaymentsConfirm } from "~/features/payments/api/usePostPayments";
import { Button } from "~/shared/ui";

const PaymentsConfirm = () => {
  const [searchParams] = useSearchParams();
  const paymentIntentId = searchParams.get("payment_intent");
  const {
    mutate: postPaymentsConfirm,
    isPending,
    isSuccess,
    isError,
  } = usePostPaymentsConfirm();

  useEffect(() => {
    if (paymentIntentId) {
      postPaymentsConfirm({ payload: { paymentIntentId } });
    }
  }, [paymentIntentId, postPaymentsConfirm]);

  const renderContent = () => {
    if (isPending) {
      return (
        <>
          <Loader2 className="text-primary animate-spin" size={150} />
          <h1 className="text-4xl my-4 text-primary">
            Finalizujemy płatność...
          </h1>
          <p className="mb-4">Proszę nie zamykać okna przeglądarki.</p>
        </>
      );
    }

    if (isSuccess) {
      return (
        <>
          <CircleCheckBig className="text-primary" size={150} />
          <h1 className="text-4xl my-4 text-primary">
            Witaj w wersji Premium!
          </h1>
          <p className="mb-4">
            Twoje kredyty zostały dodane. Miłego korzystania z aplikacji!
          </p>
          <Button asChild size="lg">
            <Link to="/dashboard">Zacznij teraz</Link>
          </Button>
        </>
      );
    }

    if (isError) {
      return (
        <>
          <AlertCircle className="text-primary" size={150} />
          <h1 className="text-4xl my-4 text-primary">Coś poszło nie tak</h1>
          <p className="mb-4">
            Nie udało się potwierdzić płatności automatycznie. Jeśli środki
            zostały pobrane, skontaktuj się z nami.
          </p>
          <Button asChild size="lg">
            <Link to="/payments">Wróć do płatności</Link>
          </Button>
        </>
      );
    }

    if (!paymentIntentId && !isPending) {
      return <Navigate to="/dashboard" />;
    }
  };

  return (
    <div className="container">
      <div className="bg-secondary/10 rounded-2xl my-6 shadow-xl p-24 grid place-items-center text-center">
        {renderContent()}
      </div>
    </div>
  );
};

export default PaymentsConfirm;
