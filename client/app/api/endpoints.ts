const createApiEndpoint = (path: string) => `/api${path}`;

export const endpoints = {
  core: {
    auth: {
      getUser: createApiEndpoint("/me"),

      postPaymentsIntent: createApiEndpoint("/payments-intent"),
    },
  },
};
