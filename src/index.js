import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CategoryContextProvider } from "./Context/category-context";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import Rules from "./Pages/Rules/Rules";
import NavBar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { NameContextProvider } from "./Context/name-context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoryContextProvider>
        <NameContextProvider>
          <App />
        </NameContextProvider>
      </CategoryContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

export { Home, Quiz, Result, Rules, NavBar, Footer };
