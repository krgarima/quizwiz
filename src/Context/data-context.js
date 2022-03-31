import React, { useState, createContext, useEffect, useContext } from "react";
import axios from "axios";
import { CategoryContext } from "./category-context";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const { category } = useContext(CategoryContext);

  useEffect(() => {
    (async function fetchQuestions() {
      try {
        const { data } = await axios.get(
          `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=medium&type=multiple`
        );
        setData(data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [category]);

  return (
    <div>
      <DataContext.Provider value={{ data, setData }}>
        {children}
      </DataContext.Provider>
    </div>
  );
};

export { DataContext, DataContextProvider };
