import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CategoryContextProvider } from "./Context/category-context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoryContextProvider>
        <App />
      </CategoryContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
