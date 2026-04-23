import { formatPrice, getVariant } from "../utils";
import type { PaymentsVariant } from "../types";

export const usePaymentVariant = (variant: PaymentsVariant) => {
  const data = getVariant(variant);

  return {
    ...data,
    formattedPrice: formatPrice(data.price),
  };
};
