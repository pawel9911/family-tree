import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { endpoints } from "~/api/endpoints";
import { httpClient } from "~/lib/axios";
import type {
  PaymentsConfirmPayload,
  PostPaymentsConfirmResponse,
} from "../types";
import { invalidateQuery } from "~/lib/react-query";

interface PostPaymentsConfirmParams {
  payload: PaymentsConfirmPayload;
}

const postPaymentsConfirm = ({ payload }: PostPaymentsConfirmParams) =>
  httpClient
    .post<PostPaymentsConfirmResponse>(
      endpoints.core.auth.postPaymentsConfirm,
      payload,
    )
    .then((response) => response.data);

interface UsePostPaymentsConfirmParams {
  options?: Omit<
    UseMutationOptions<
      PostPaymentsConfirmResponse,
      Error,
      PostPaymentsConfirmParams,
      unknown
    >,
    "mutationFn" | "mutationKey"
  >;
}

export const usePostPaymentsConfirm = ({
  options = {},
}: UsePostPaymentsConfirmParams = {}) => {
  return useMutation({
    mutationFn: postPaymentsConfirm,
    onSuccess: () => invalidateQuery([endpoints.core.auth.getUser]),
    ...options,
  });
};
