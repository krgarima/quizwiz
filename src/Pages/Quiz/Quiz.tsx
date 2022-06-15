import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  // CategoryContext,
  ScoreContext,
  DataContext,
  ResultContext,
} from "../../Context/index";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";

const Quiz = () => {
  // const { category } = useContext(CategoryContext);
  const { score, setScore } = useContext(ScoreContext);
  const { data } = useContext(DataContext);
  const { resultDispatch } = useContext(ResultContext);
  const [number, setNumber] = useState(0);
  const [selected, setSelected] = useState<string>();
  const [disabledBtn, setDisabledBtn] = useState(false);

  const navigate = useNavigate();

  const handleSelect = (currentOption: string) => {
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
    setDisabledBtn(false);
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
      <img
        className="bg-image"
        src="/assets/images/bg1.jpg"
        alt="backgroundImage"
      />
      <div className="quiz-container">
        <h1 className="quiz-heading">Quizwiz</h1>
        {/* {category === 27 && <h2>Animals</h2>} */}

        {data[number] ? (
          <>
            <div className="ques-score space-between">
              <span>Question: {number + 1}/10</span>
              <span>Score: {score}</span>
            </div>
            <h2 key={data.length} className="question-heading">
              {data[number].question.replace(/&quot;/g, '"')}
            </h2>

            <div className="btn-container">
              {[data[number].correct_answer, ...data[number].incorrect_answers]
                .sort(() => Math.random() - 0.5)
                .map((currentOption: string) => (
                  <li key={Math.random()}>
                    <button
                      disabled={disabledBtn}
                      key={currentOption}
                      className={`btn-options ${
                        selected && handleSelect(currentOption)
                      }`}
                      onClick={() => {
                        setSelected(currentOption);
                        if (currentOption === data[number].correct_answer) {
                          setScore((currentScore) => currentScore + 1);
                        }
                        setDisabledBtn(true);
                      }}
                    >
                      {currentOption}
                    </button>
                  </li>
                ))}
            </div>

            <div className="space-between">
              <button className="btn-quit">
                <Link to="/result">Quit</Link>
              </button>
              <button className="btn-next" onClick={handleNext}>
                {number === 9 ? "End Quiz" : "Next"}
              </button>
            </div>
            <button className="show-results">
              <Link to="/result">Show the results</Link>
            </button>
          </>
        ) : (
          <i className="fas fa-spinner fa-6x fa-spin"></i>
        )}
      </div>
    </div>
  );
};

export default Quiz;
