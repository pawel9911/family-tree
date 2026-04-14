import { QueryClient, type DefaultOptions } from "@tanstack/react-query";

export const queryClient = new QueryClient();

const defaultOptions: DefaultOptions = {
  queries: {
    retry: 0,
  },
  mutations: {
    retry: 0,
  },
};

queryClient.setDefaultOptions(defaultOptions);

export const invalidateQuery = (queryKey: unknown[]) => {
  return queryClient.invalidateQueries({
    queryKey: queryKey,
    // v5 pozwala też dodać opcje jak exact: true, jeśli chcesz zresetować
    // tylko ten konkretny klucz bez jego "dzieci"
  });
};
