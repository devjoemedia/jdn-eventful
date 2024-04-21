import { FC, ReactElement } from "react";
import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface SessionProviderProps {
  children: ReactElement;
}

interface User {
  name: string
}

interface SessionContextType {
  user: User | null;
  signIn: (userData: User) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
}

// Create Context
export const SessionContext = createContext<SessionContextType | undefined>(
  undefined
);

// Session Provider Component
export const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Function to handle user login
  const signIn = async (userData: User) => {
    await AsyncStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  // Function to handle user logout
  const signOut = async () => {
    await AsyncStorage.removeItem("user");
    setUser(null);
  };

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData));
      }
      setLoading(false);
    };

    checkUserLoggedIn();
  }, []);

  // Value to be provided by the context
  const value = {
    user,
    signIn,
    signOut,
    loading,
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
