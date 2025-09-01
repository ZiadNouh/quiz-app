import { useState } from "react";
import QUESTIONS from "../questions";

const Quiz = () => {
  // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
  };
  console.log(QUESTIONS);
  console.log(activeQuestionIndex);
  console.log(QUESTIONS[activeQuestionIndex + 2]);
  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
