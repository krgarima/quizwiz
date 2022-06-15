import React, { useReducer, createContext } from "react";
import { resultReducer, actionType } from "../Reducer/result-reducer";

import { DataObjInterface } from "./data-context";

export interface ResultInt {
  data: DataObjInterface;
  selected: string;
}

export interface ResultInterface {
  result: ResultInt[] | any;
  resultDispatch: React.Dispatch<actionType>;
}

const ResultContext = createContext({} as ResultInterface);

const ResultContextProvider = ({ children }: any) => {
  const [result, resultDispatch] = useReducer<any>(resultReducer, []);

  return (
    <div>
      <ResultContext.Provider value={{ result, resultDispatch }}>
        {children}
      </ResultContext.Provider>
    </div>
  );
};

export { ResultContext, ResultContextProvider };
