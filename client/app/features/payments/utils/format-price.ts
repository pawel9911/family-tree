export const formatPrice = (amountInCents: number, currency = "PLN") => {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: currency,
  }).format(amountInCents / 100);
};
