import React, { useContext } from "react";
import Card from "../../Components/Card/Card";
import { SearchContext } from "../../Context";
import "./Home.css";

export default function Home() {
  const { searchList } = useContext(SearchContext);
  return (
    <div className="home-container">
      <h1 className="welcome-heading">QuizWiz</h1>

      {searchList.length === 0 && (
        <div className="img-container">
          <img className="cover-img" src="/assets/images/bg5.jpg" alt="cover" />
          <h2 className="welcome-question">
            Are you smart enough to take our Quiz?
          </h2>
        </div>
      )}

      {searchList.length === 0 && (
        <h2 className="welcome-msg">Test yourself</h2>
      )}

      {searchList.length === 0 ? (
        <h2>Choose your favorite category</h2>
      ) : (
        <h2>
          We found {searchList.length} matching categor
          {searchList.length < 2 ? "y" : "ies"}
        </h2>
      )}

      <Card />
    </div>
  );
}
