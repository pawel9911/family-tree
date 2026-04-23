import type { PropsWithChildren } from "react";
import { PaymentsCard } from "../payments-card";

interface PaymentsBannerProps extends PropsWithChildren {
  redirectButton?: boolean;
}

export const PaymentsBanner = ({
  children,
  redirectButton,
}: PaymentsBannerProps) => {
  return (
    <div className="grid my-24">
      <h3 className="text-center text-4xl mb-8">Czas na Twoje Premium</h3>
      <p className="max-w-3/5 mx-auto mb-8 text-gray-400 text-center">
        Zapłać teraz, aby otrzymać natychmiastowy dostęp do wszystkich
        ekskluzywnych funkcji i narzędzi.
      </p>
      <div className="grid grid-cols-3 gap-8 mt-16 mb-24">
        <PaymentsCard redirectButton={redirectButton} />
        <PaymentsCard redirectButton={redirectButton} variant="PRO" />
        <PaymentsCard redirectButton={redirectButton} variant="PREMIUM" />
      </div>
      {children}
    </div>
  );
};
