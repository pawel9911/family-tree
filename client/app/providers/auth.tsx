import {
  useMutation,
  useQuery,
  type UseMutateFunction,
} from "@tanstack/react-query";
import { contextFactory } from "@utils";
import { useMemo, type ReactNode } from "react";
import { endpoints } from "~/api/endpoints";
import { Loading } from "~/components/loading/loading";
import { httpClient } from "~/lib/axios";
import { queryClient } from "~/lib/react-query";
import { type UserType } from "~/shared/types";

interface AuthContextValue {
  user: UserType;
  logout: UseMutateFunction;
  loginWithGoogle: VoidFunction;
}

const [AuthContext, useAuthContext] = contextFactory<AuthContextValue>("Auth");

export { useAuthContext };

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { data: user, isLoading } = useQuery<UserType>({
    queryKey: [endpoints.core.auth.getUser],
    queryFn: () =>
      httpClient
        .get<UserType>(endpoints.core.auth.getUser)
        .then((response) => response.data),
  });

  const { mutate: logout } = useMutation({
    mutationFn: () => httpClient.post(endpoints.core.auth.logout),
    onSuccess: () => {
      queryClient.clear();
    },
  });

  const loginWithGoogle = () => {
    globalThis.location.href = `/auth/google`;
  };

  const ctxValue = useMemo<AuthContextValue>(() => {
    return {
      user: user ?? null,
      logout,
      loginWithGoogle,
    };
  }, [user, logout]);

  return (
    <AuthContext.Provider value={ctxValue}>
      {isLoading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};
