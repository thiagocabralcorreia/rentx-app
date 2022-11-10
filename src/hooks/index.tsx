import { AuthProvider, AuthProviderProps } from "./auth";

function AppProvider({ children }: AuthProviderProps) {
  return <AuthProvider>{children}</AuthProvider>;
}

export { AppProvider };
