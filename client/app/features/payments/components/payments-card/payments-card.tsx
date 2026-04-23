import { Box, Check, Gem, Zap } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/shared/ui";
import { cn } from "~/utils";
import type { PaymentsVariant } from "../../types";
import { usePaymentVariant } from "../../hooks";

interface PaymentsCardProps {
  variant?: PaymentsVariant;
  redirectButton?: boolean;
}

export const PaymentsCard = ({
  variant = "STANDARD",
  redirectButton = false,
}: PaymentsCardProps) => {
  const { title, subTitle, credits, description, checklist } =
    usePaymentVariant(variant);

  const getTheme = () => {
    switch (variant) {
      case "PRO": {
        return {
          background: "bg-secondary/10",
          icon: <Zap className="text-white" />,
        };
      }
      case "PREMIUM": {
        return {
          background: "bg-white",
          icon: <Gem className="text-white" />,
        };
      }
      default: {
        return {
          background: "bg-gray-400/10",
          icon: <Box className="text-white" />,
        };
      }
    }
  };

  const { background, icon } = getTheme();

  return (
    <div
      className={cn(
        "flex flex-col items-center w-full max-w-sm p-8 border border-gray-100 shadow-xl rounded-xl transition-all hover:shadow-2xl hover:-translate-y-1",
        variant === "PRO" && "scale-105",
        background,
      )}
    >
      <div className="w-full flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-primary">{icon}</div>
        <div>
          <h3 className="text-xl font-bold text-primary">{title}</h3>
          <p className="text-sm font-semibold">{subTitle}</p>
        </div>
      </div>
      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-extrabold tracking-tight text-primary">
            {credits}
          </span>
          <span className="font-bold uppercase text-xs tracking-wider">
            kredytów
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="space-y-4 mb-8 flex-1">
        {checklist.map((e, i) => (
          <div key={i} className="flex items-start gap-3 text-sm">
            <Check size={22} className="mt-0.5 shrink-0 text-primary" />
            <span>{e}</span>
          </div>
        ))}
      </div>
      {redirectButton ? (
        <Button size="lg" className="h-10 px-4" asChild>
          <Link
            to={`/payments/summary?variant=${variant}`}
            preventScrollReset={true}
          >
            Wybierz ten pakiet
          </Link>
        </Button>
      ) : null}
    </div>
  );
};
