/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getRandomInt } from "../utils/random";

export default function Question({ question, questionIndex, onAnswerChange }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerChange = (event) => {
    setSelectedAnswer({
      id: questionIndex,
      value: event.target.value,
    });
  };

  const handleAnswerSubmit = () => {
    onAnswerChange(selectedAnswer);
  };

  const answers = question.incorrect_answers.filter((answer, index) => {
    return question.incorrect_answers.indexOf(answer) === index;
  });
  const randomIndex = getRandomInt(answers.length);
  answers.splice(randomIndex, 0, question.correct_answer);

  let questionTitle = question.question.replace(/&quot;/g, '"');
  let newQuestionTitle = questionTitle.replace(/&#039;/g, "'");

  useEffect(() => {
    console.log(selectedAnswer);
  }, [selectedAnswer]);

  return (
    <div className="question-card">
      <h3>{newQuestionTitle}</h3>
      <div  className="answers">
      {answers.map((answer, index) => {
        let newAnswer = answer.replace(/&quot;/g, '"');
        let newAnswer2 = newAnswer.replace(/&#039;/g, "'");
        return (
          <div key={index}>
            <input type="radio" id={answer} name={`question${questionIndex}`} value={answer} onClick={handleAnswerChange} />
            <label htmlFor={answer}>{newAnswer2}</label>
          </div>
        );
      })
    }
    </div>
    <button onClick={handleAnswerSubmit} className='button-answer'>Submit</button>
    </div>
  );
}