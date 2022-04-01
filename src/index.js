import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import Rules from "./Pages/Rules/Rules";
import NavBar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login";
import { CategoryContextProvider } from "./Context/category-context";
import { ScoreContextProvider } from "./Context/totalScore-context";
import { DataContextProvider } from "./Context/data-context";
import { NameContextProvider } from "./Context/name-context";
import { ResultContextProvider } from "./Context/result-context";
import { AuthContextProvider } from "./Context/auth-context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoryContextProvider>
        <ResultContextProvider>
          <ScoreContextProvider>
            <DataContextProvider>
              <NameContextProvider>
                <AuthContextProvider>
                  <App />
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
