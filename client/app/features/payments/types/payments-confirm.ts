import type { UserType } from "~/shared/types";

export type PaymentsConfirmPayload = {
  paymentIntentId: string;
};

export type PostPaymentsConfirmResponse = {
  success: boolean;
  credits: number;
  user: NonNullable<UserType>;
};
