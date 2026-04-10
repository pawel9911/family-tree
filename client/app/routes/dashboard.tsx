import { PaymentsBanner } from "~/features/payments";
import { Link } from "react-router";
import { Button } from "~/shared/ui";

const Dashboard = () => {
  return (
    <div className="container">
      <PaymentsBanner>
        <Button asChild className="mx-auto" size="lg">
          <Link to="/payments">Zobacz szczegóły</Link>
        </Button>
      </PaymentsBanner>
    </div>
  );
};

export default Dashboard;
