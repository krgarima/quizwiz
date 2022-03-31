import React, { useState, createContext } from "react";

const CategoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
  const [category, setCategory] = useState([]);

  return (
    <div>
      <CategoryContext.Provider value={{ category, setCategory }}>
        {children}
      </CategoryContext.Provider>
    </div>
  );
};

export { CategoryContext, CategoryContextProvider };
