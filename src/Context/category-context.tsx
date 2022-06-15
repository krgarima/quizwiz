import React, { useState, createContext } from "react";

export interface CategoryInterface {
  category: number;
  setCategory: React.Dispatch<React.SetStateAction<number>>;
}

const CategoryContext = createContext({} as CategoryInterface);

const CategoryContextProvider = ({ children }: any) => {
  const [category, setCategory] = useState<number>(0);

  return (
    <div>
      <CategoryContext.Provider value={{ category, setCategory }}>
        {children}
      </CategoryContext.Provider>
    </div>
  );
};

export { CategoryContext, CategoryContextProvider };
