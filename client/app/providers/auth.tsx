import { contextFactory } from "@utils";
import { useMemo, type ReactNode } from "react";

interface AuthContextValue {}

const [AuthContext, useAuthContext] = contextFactory<AuthContextValue>("Auth");

export { useAuthContext };

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const ctxValue = useMemo<AuthContextValue>(() => {
    return {};
  }, []);

  return (
    <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
  );
};
