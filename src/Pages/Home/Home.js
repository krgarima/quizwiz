import React from "react";
import Card from "../../Components/Card/Card";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="welcome-heading">QuizzWizz</h1>

      <div className="img-container">
        <img className="cover-img" src="/assets/images/bg5.jpg" alt="cover" />
        <h2 className="welcome-question">
          Are you smart enough to take our Quiz?
        </h2>
      </div>

      <h2 className="welcome-msg">Test yourself</h2>
      <h2>Choose your favorite category</h2>

      <Card />
    </div>
  );
}
