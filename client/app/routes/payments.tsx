import { PaymentsBanner, PaymentsForm } from "~/features/payments";

const Payments = () => {
  return (
    <div className="container">
      <PaymentsBanner>
        <PaymentsForm />
      </PaymentsBanner>
    </div>
  );
};

export default Payments;
