import React, { useState, createContext } from "react";

const NameContext = createContext();

const NameContextProvider = ({ children }) => {
  const [name, setName] = useState([]);

  return (
    <div>
      <NameContext.Provider value={{ name, setName }}>
        {children}
      </NameContext.Provider>
    </div>
  );
};

export { NameContext, NameContextProvider };
