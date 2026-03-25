import { createContext } from 'react';

export type AuthContextType = {
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider: React.FC<{
  children: React.ReactNode;
  isAuthenticated: boolean;
}> = ({ children, isAuthenticated }) => {
  return <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>;
};
