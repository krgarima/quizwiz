import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { NameContext } from "../../Context/name-context";
import "./Rules.css";

const Rules = () => {
  const { name, setName } = useContext(NameContext);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="rules-container">
      {submitted ? (
        <div className="rules ">
          <h1 className="rules-heading">QUIZ RULES</h1>
          <p>1. You will be presented with a set of 10 questions.</p>
          <p>2. Each question will have multiple choices.</p>
          <p>3. Each question has only one correct answer.</p>
          <p>4. Correct answer will fetch you 1 point.</p>
          <p>5. There is no negative marking for incorrect answers.</p>
          <p>6. You can answer a question only once. </p>
          <p>
            7. Question number and score is displayed on the top of the screen.
          </p>
          <p>
            8. To move to the Next question, click on the 'Next' button. <br />
            Note that, once you move to the next question <br />
            you cannot access the last question.
          </p>
          <p>9. To quit the quiz game, click on the 'Quit' button.</p>
          <p>10. To see the results, click on the 'See results' button.</p>
        </div>
      ) : (
        <form className="name-container">
          <label htmlFor="userName">Enter your name</label>
          <input
            type="text"
            id="userName"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <button
            disabled={name.length === 0}
            className="submit"
            onClick={(e) => {
              e.preventDefault();
              setSubmitted(true);
              localStorage.setItem("username", name);
            }}
          >
            Submit
          </button>
        </form>
      )}
      <button className="btn-toQuizPage">
        {submitted ? <Link to="/quiz">Play</Link> : "Play"}
      </button>
    </div>
  );
};

export default Rules;
