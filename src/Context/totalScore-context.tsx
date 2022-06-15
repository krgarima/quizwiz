import React, { useState, createContext } from "react";

export interface TotalScoreInterface {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const ScoreContext = createContext({} as TotalScoreInterface);

const ScoreContextProvider = ({ children }: any) => {
  const [score, setScore] = useState<number>(0);

  return (
    <div>
      <ScoreContext.Provider value={{ score, setScore }}>
        {children}
      </ScoreContext.Provider>
    </div>
  );
};

export { ScoreContext, ScoreContextProvider };
