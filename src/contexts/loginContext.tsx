import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext({
  login: () => {},
  isLoggedIn: false,
  logout: () => {},
});

type ContextProps = {
  children: React.ReactNode;
};

const LoginProvider = ({ children }: ContextProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("loggedIn", "true");
    } else {
      localStorage.setItem("loggedIn", "false");
    }
  }, [isLoggedIn]);

  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };

  const sharedObj = { login, isLoggedIn, logout };
  return (
    <LoginContext.Provider value={sharedObj}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;
