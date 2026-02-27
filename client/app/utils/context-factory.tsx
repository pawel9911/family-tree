import { useContext, createContext } from "react";

export const contextFactory = <ContextValueType extends object>(
  rootComponentName: string,
) => {
  const Context = createContext<ContextValueType>(null!);

  const useScopedContext = () => {
    const value = useContext(Context);

    if (!value) {
      throw new Error(
        `You're trying to access ${rootComponentName} context outside it's provider!`,
      );
    }

    return value;
  };

  return [Context, useScopedContext] as const;
};
