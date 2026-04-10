import type { PropsWithChildren } from "react";
import { Box, Gem, Zap } from "lucide-react";

export const PaymentsBanner = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid my-24">
      <h3 className="text-center text-4xl mb-8">Czas na Twoje Premium</h3>
      <p className="max-w-3/5 mx-auto mb-8 text-gray-400 text-center">
        Zapłać teraz, aby otrzymać natychmiastowy dostęp do wszystkich
        ekskluzywnych funkcji i narzędzi.
      </p>
      <div className="grid grid-cols-3 gap-8 mt-16 mb-24">
        <div className="flex flex-col items-center justify-center shadow-md rounded-md h-48 p-6 bg-gray-400/10">
          <div className="inline-block p-2 bg-gray-400/25 rounded-lg mb-2">
            <Box />
          </div>
          <p className="text-3xl mb-2">Standard</p>
          <p className="text-gray-400">Stan subskrybcji</p>
        </div>
        <div className="flex flex-col items-center justify-center shadow-md rounded-md h-48 p-6 bg-primary scale-110">
          <div className="inline-block p-2 bg-white/25 rounded-lg mb-2">
            <Zap className="text-white" />
          </div>
          <p className="text-3xl text-white mb-2">Premium Pro</p>
          <p className="text-white">Stan subskrybcji</p>
        </div>
        <div className="flex flex-col items-center justify-center shadow-md rounded-md h-48 p-6 bg-secondary/10">
          <div className="inline-block p-2 bg-secondary/15 rounded-lg mb-2">
            <Gem />
          </div>
          <p className="text-3xl mb-2">Premium</p>
          <p className="text-gray-400">Stan subskrybcji</p>
        </div>
      </div>
      {children}
    </div>
  );
};
