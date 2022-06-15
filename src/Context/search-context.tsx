import React, { useState, createContext } from "react";

import { CategoriesObjType } from "../backend/db/categories";

export interface SearchInterface {
  searchList: CategoriesObjType[] | any;
  setSearchList: React.Dispatch<React.SetStateAction<CategoriesObjType[]>>;
}

const SearchContext = createContext({} as SearchInterface);

const SearchContextProvider = ({ children }: any) => {
  const [searchList, setSearchList] = useState<CategoriesObjType[]>([]);

  return (
    <div>
      <SearchContext.Provider value={{ searchList, setSearchList }}>
        {children}
      </SearchContext.Provider>
    </div>
  );
};

export { SearchContext, SearchContextProvider };
