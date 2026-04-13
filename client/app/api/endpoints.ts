const createApiEndpoint = (path: string) => `/api${path}`;

export const endpoints = {
  core: {
    auth: {
      getUser: createApiEndpoint("/me"),

      postPaymentsConfirm: createApiEndpoint("/payments-confirm"),
      postPaymentsIntent: createApiEndpoint("/payments-intent"),
    },
  },
};
