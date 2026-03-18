import { createContext, useContext } from "react";

interface User {
  id: string;
  role: "trainer" | "student";
}

const mockUser: User = {
  id: "1",
  role: "trainer",
};

const AuthContext = createContext<{ user: User }>({
  user: mockUser,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <AuthContext.Provider value={{ user: mockUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
