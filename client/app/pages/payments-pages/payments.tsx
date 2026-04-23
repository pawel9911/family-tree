import { PaymentsBanner } from "~/features/payments";

const Payments = () => {
  return (
    <div className="container">
      <PaymentsBanner redirectButton />
    </div>
  );
};

export default Payments;
