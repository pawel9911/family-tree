import { usePaymentVariant } from "../hooks";

export type PaymentsIntentPayload = {
  amount: number;
  title: ReturnType<typeof usePaymentVariant>["title"];
};

export type PostPaymentsIntentResponse = {
  clientSecret: string;
};
