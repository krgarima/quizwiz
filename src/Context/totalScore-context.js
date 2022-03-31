import React, { useState, createContext } from "react";

const ScoreContext = createContext();

const ScoreContextProvider = ({ children }) => {
  const [score, setScore] = useState([]);

  return (
    <div>
      <ScoreContext.Provider value={{ score, setScore }}>
        {children}
      </ScoreContext.Provider>
    </div>
  );
};

export { ScoreContext, ScoreContextProvider };
