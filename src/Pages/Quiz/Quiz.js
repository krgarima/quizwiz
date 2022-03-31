import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../Context/category-context";
import { ScoreContext } from "../../Context/totalScore-context";
import { DataContext } from "../../Context/data-context";
import { ResultContext } from "../../Context/result-context";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";

export default function Quiz() {
  const { category } = useContext(CategoryContext);
  const { setScore } = useContext(ScoreContext);
  const { data } = useContext(DataContext);
  const { result, resultDispatch } = useContext(ResultContext);
  const [number, setNumber] = useState(0);
  const [selected, setSelected] = useState();
  const [totalScore, setTotalScore] = useState(0);

  const navigate = useNavigate();

  const handleSelect = (currentOption) => {
    if (currentOption === selected && selected === data[number].correct_answer)
      return "green";
    else if (
      currentOption === selected &&
      selected !== data[number].correct_answer
    )
      return "red";
    if (currentOption === data[number].correct_answer) return "green";
  };

  const handleNext = () => {
    if (number <= 8) {
      setNumber((num) => num + 1);
      setSelected("");

      resultDispatch({
        type: "ADDED",
        payload: { current: data[number], selected: selected },
      });
    } else navigate("/result");
  };

  return (
    <div className="container">
      {console.log(result)}
      <img
        className="bg-image"
        src="/assets/images/bg1.jpg"
        alt="backgroundImage"
      />
      <div className="quiz-container">
        <h1 className="quiz-heading">Quizwiz</h1>
        {category === 27 && <h2>Animals</h2>}

        {data[number] ? (
          <>
            <div className="ques-score space-between">
              <span>Question: {number + 1}/10</span>
              <span>Score: {totalScore}</span>
            </div>
            <h2 key={data.length} className="question-heading">
              {data[number].question.replace(/&quot;/g, '"')}
            </h2>

            <div className="btn-container">
              {[data[number].correct_answer, ...data[number].incorrect_answers]
                .sort(() => Math.random() - 0.5)
                .map((currentOption) => (
                  <li key={Math.random(1)}>
                    <button
                      disabled={selected}
                      key={currentOption}
                      className={`btn-options ${
                        selected && handleSelect(currentOption)
                      }`}
                      onClick={() => {
                        setSelected(currentOption);
                        if (currentOption === data[number].correct_answer) {
                          setTotalScore((score) => score + 1);
                        }
                      }}
                    >
                      {currentOption}
                    </button>
                  </li>
                ))}
            </div>

            <div className="space-between">
              <button className="btn-quit" onClick={() => setScore(totalScore)}>
                <Link to="/result">Quit</Link>
              </button>
              <button className="btn-next" onClick={handleNext}>
                {number === 9 ? "End Quiz" : "Next"}
              </button>
            </div>
            <button
              className="show-results"
              onClick={() => setScore(totalScore)}
            >
              <Link to="/result">Show the results</Link>
            </button>
          </>
        ) : (
          <i className="fas fa-spinner fa-6x fa-spin"></i>
        )}
      </div>
    </div>
  );
}
