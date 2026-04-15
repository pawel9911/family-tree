const createApiEndpoint = (path: string) => `/api${path}`;

export const endpoints = {
  core: {
    auth: {
      getUser: createApiEndpoint("/me"),
      logout: createApiEndpoint("/logout"),

      postPaymentsConfirm: createApiEndpoint("/payments-confirm"),
      postPaymentsIntent: createApiEndpoint("/payments-intent"),
    },
  },
};
