import React, { useState, createContext } from "react";

export interface NameInterface {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const NameContext = createContext({} as NameInterface);

const NameContextProvider = ({ children }: any) => {
  const [name, setName] = useState<string>("");

  return (
    <div>
      <NameContext.Provider value={{ name, setName }}>
        {children}
      </NameContext.Provider>
    </div>
  );
};

export { NameContext, NameContextProvider };
