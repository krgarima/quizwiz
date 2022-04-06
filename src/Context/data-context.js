import React, { useState, createContext, useEffect, useContext } from "react";
import axios from "axios";
import { CategoryContext } from "./category-context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const { category } = useContext(CategoryContext);

  const notify = (msg) =>
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
        notify(error);
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
