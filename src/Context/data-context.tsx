import React, { useState, createContext, useEffect, useContext } from "react";
import axios from "axios";
import { CategoryContext } from "./category-context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface DataObjInterface {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export interface DataInterface {
  data: DataObjInterface[];
  setData: React.Dispatch<React.SetStateAction<DataObjInterface[]>>;
}

const DataContext = createContext({} as DataInterface);

const DataContextProvider = ({ children }: any) => {
  const [data, setData] = useState<DataObjInterface[]>([]);
  const { category } = useContext<any>(CategoryContext);

  const notify = (msg: string) =>
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  useEffect(() => {
    (async function fetchQuestions() {
      try {
        const { data } = await axios.get(
          `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=medium&type=multiple`
        );
        setData(data.results);
      } catch (error) {
        notify("Please refresh! Some error has occured.");
      }
    })();
  }, [category]);

  return (
    <div>
      <DataContext.Provider value={{ data, setData }}>
        {children}
      </DataContext.Provider>
      <ToastContainer />
    </div>
  );
};

export { DataContext, DataContextProvider };
