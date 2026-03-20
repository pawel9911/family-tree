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
