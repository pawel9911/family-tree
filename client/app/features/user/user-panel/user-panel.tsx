import { CreditCard, CalendarClock } from "lucide-react";

export const UserPanel = () => {
  return (
    <div className="grid grid-cols-3 gap-6 my-6">
      <div className="shadow-2xs rounded-xl h-48 p-6 bg-pink-400/10">
        <div className="inline-block p-2 bg-pink-400/15 rounded-lg mb-2">
          <CreditCard />
        </div>
        <p className="text-3xl mb-2">Standard</p>
        <p className="text-gray-400">Stan subskrybcji</p>
      </div>
      <div className="shadow-2xs rounded-xl h-48 p-6 bg-gray-400/10">
        <div className="inline-block p-2 bg-gray-400/15 rounded-lg mb-2">
          <CalendarClock />
        </div>
        <p className="text-3xl mb-2">42 dni</p>
        <p className="text-gray-400">Wyganśnie subskrpcja</p>
      </div>
    </div>
  );
};
