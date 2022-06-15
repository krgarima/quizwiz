import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  Home,
  Quiz,
  Result,
  Rules,
  Login,
  NavBar,
  Footer,
} from "./Pages/index";

import {
  CategoryContextProvider,
  ScoreContextProvider,
  DataContextProvider,
  NameContextProvider,
  ResultContextProvider,
  AuthContextProvider,
  SearchContextProvider,
} from "./Context/index";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoryContextProvider>
        <ResultContextProvider>
          <ScoreContextProvider>
            <DataContextProvider>
              <NameContextProvider>
                <AuthContextProvider>
                  <SearchContextProvider>
                    <App />
                  </SearchContextProvider>
                </AuthContextProvider>
              </NameContextProvider>
            </DataContextProvider>
          </ScoreContextProvider>
        </ResultContextProvider>
      </CategoryContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

export { Home, Quiz, Result, Rules, NavBar, Footer, Login };
