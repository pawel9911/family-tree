import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { endpoints } from "~/api/endpoints";
import { httpClient } from "~/lib/axios";
import type {
  PaymentsIntentPayload,
  PostPaymentsIntentResponse,
} from "../types";

interface PostPaymentsIntentParams {
  payload: PaymentsIntentPayload;
}

const postPaymentsIntent = ({ payload }: PostPaymentsIntentParams) =>
  httpClient
    .post<PostPaymentsIntentResponse>(
      endpoints.core.auth.postPaymentsIntent,
      payload,
    )
    .then((response) => response.data);

interface UsePostPaymentsIntentParams {
  options?: Omit<
    UseMutationOptions<
      PostPaymentsIntentResponse,
      Error,
      PostPaymentsIntentParams,
      unknown
    >,
    "mutationFn" | "mutationKey"
  >;
}

export const usePostPaymentsIntent = ({
  options = {},
}: UsePostPaymentsIntentParams = {}) => {
  return useMutation({
    mutationFn: postPaymentsIntent,
    ...options,
  });
};
