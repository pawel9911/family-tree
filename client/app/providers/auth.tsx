import { contextFactory } from "@utils";
import { useMemo, useState, type ReactNode } from "react";

type User = { id: string } | null;

interface AuthContextValue {
  user: User;
}

const [AuthContext, useAuthContext] = contextFactory<AuthContextValue>("Auth");

export { useAuthContext };

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user] = useState<User>(null); // todo replace real user

  const ctxValue = useMemo<AuthContextValue>(() => {
    return {
      user,
    };
  }, [user]);

  return (
    <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
  );
};
