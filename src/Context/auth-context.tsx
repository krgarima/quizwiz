import React, { useState, createContext } from "react";

export interface AuthInterface {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  logged: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
  rememberPassword: boolean;
  setRememberPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext({} as AuthInterface);

const AuthContextProvider = ({ children }: any) => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [logged, setLogged] = useState<boolean>(false);
  const [rememberPassword, setRememberPassword] = useState<boolean>(false);

  return (
    <div>
      <AuthContext.Provider
        value={{
          userName,
          setUserName,
          password,
          setPassword,
          logged,
          setLogged,
          rememberPassword,
          setRememberPassword,
        }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export { AuthContext, AuthContextProvider };
