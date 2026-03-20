import { useQuery } from "@tanstack/react-query";
import { contextFactory } from "@utils";
import { useMemo, type ReactNode } from "react";
import { endpoints } from "~/api/endpoints";
import { httpClient } from "~/lib/axios";
import { type UserType } from "~/shared/types";

interface AuthContextValue {
  user: UserType;
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

  const ctxValue = useMemo<AuthContextValue>(() => {
    return {
      user: user ?? null,
    };
  }, [user]);

  return (
    <AuthContext.Provider value={ctxValue}>
      {isLoading ? null : children}
    </AuthContext.Provider>
  );
};
