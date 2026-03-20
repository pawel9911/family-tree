import { QueryClientProvider as Provider } from "@tanstack/react-query";
import { type ReactNode } from "react";
import { queryClient } from "~/lib/react-query";

interface QueryClientProviderProps {
  children: ReactNode;
}

export const QueryClientProvider = ({ children }: QueryClientProviderProps) => {
  return <Provider client={queryClient}>{children}</Provider>;
};
