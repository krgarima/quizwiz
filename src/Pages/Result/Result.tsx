import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ScoreContext, NameContext, ResultContext } from "../../Context/index";
import "./Result.css";

export type AnswersType = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
  selected: string;
};

const Result = () => {
  const { score, setScore } = useContext(ScoreContext);
  const { name, setName } = useContext(NameContext);
  const { result, resultDispatch } = useContext(ResultContext);
  const [scoreDisplay, setScoreDisplay] = useState(true);

  useEffect(() => {
    localStorage.setItem(
      "leaderboard",
      JSON.stringify({ name: name, score: score })
    );
  }, [score, name]);

  return (
    <div className="result-container">
      {scoreDisplay ? (
        <div className="userResult">
          <h1>Score Card</h1>
          <p>Name: {name || localStorage.getItem("username")} </p>
          <p>Your score: {score}</p>
          <p>Correct Answers: {score}</p>
          <p>Wrong Answers: {result.length - score}</p>
          <p>Not attempted: {10 - result.length}</p>
          <p>Accuracy: {Math.round((score * 100) / result.length)}%</p>
          <button
            className="review-results"
            onClick={() => {
              setScoreDisplay(false);
            }}
          >
            Review results
          </button>
          {score > 5 ? (
            <p className="pass">You Passed</p>
          ) : (
            <p className="fail">Sorry, You Failed!</p>
          )}
        </div>
      ) : (
        <div className="review-container">
          <h1 className="review-heading">Review</h1>

          <h2 className="correct-answers">Questions you answered correctly:</h2>
          <div className="results-answers">
            <ol>
              {result
                .filter(
                  (item: AnswersType) => item.correct_answer === item.selected
                )
                .map((correctAns: AnswersType) => (
                  <li key={Math.random()}>
                    <h4 className="questions">
                      Question: {correctAns.question}
                    </h4>
                    <p>You answered: {correctAns.selected}</p>
                    <p>Correct answer: {correctAns.correct_answer}</p>
                  </li>
                ))}
            </ol>
          </div>
          <h2 className="wrong-answers">Questions you answered wrongly:</h2>
          <div className="results-answers">
            <ol>
              {result
                .filter(
                  (item: AnswersType) => item.correct_answer !== item.selected
                )
                .map((correctAns: AnswersType) => (
                  <li key={Math.random()}>
                    <h4 className="questions">
                      Question: {correctAns.question}
                    </h4>
                    <p>You answered: {correctAns.selected}</p>
                    <p>Correct answer: {correctAns.correct_answer}</p>
                  </li>
                ))}
            </ol>
          </div>
          <div className="btns-container">
            <button
              className="btn-playAgain"
              onClick={() => {
                setScore(0);
                setName("");
                resultDispatch({
                  type: "REMOVED",
                  payload: {},
                });
              }}
            >
              <Link to="/">Play again</Link>
            </button>
            {/* <button
              className="btn-leaderboard"
              onClick={() => {
                setScore(0);
                setName("");
              }}
            >
              <Link to="/">Leaderboard</Link>
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
