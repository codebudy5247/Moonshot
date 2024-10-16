"use client";
import { AuthContext } from "./(auth)/auth-context";

type ProviderProps = {
  children: React.ReactNode;
  authenticated: boolean;
};

export default function AuthProvider({ children, authenticated }: ProviderProps) {
  return (
    <AuthContext.Provider value={authenticated}>
      {children}
    </AuthContext.Provider>
  );
}
