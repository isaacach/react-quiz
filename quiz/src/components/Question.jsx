/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function Question({ question, questionIndex, onAnswerChange }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerChange = (event) => {
    setSelectedAnswer({
      id: questionIndex,
      question: newQuestionTitle,
      userAnswer: event.target.value,
      correctAnswer: question.correct_answer
    });
  };

  const handleAnswerSubmit = () => {
    if (!selectedAnswer) return;
    onAnswerChange(selectedAnswer);
    setSelectedAnswer(null);
  };

  const answers = question.answers.filter((answer, index) => {
    return question.answers.indexOf(answer) === index;
  });

  let questionTitle = question.question.replace(/&quot;/g, '"');
  let newQuestionTitle = questionTitle.replace(/&#039;/g, "'");

  useEffect(() => {
    console.log(selectedAnswer);
  }, [selectedAnswer]);

  return (
    <div className="question-card">
      <h3>{newQuestionTitle}</h3>
      <div  className="answers">
      {answers.map((answer) => {
        let newAnswer = answer.replace(/&quot;/g, '"');
        let newAnswer2 = newAnswer.replace(/&#039;/g, "'");
        return (
          <div key={answer}>
            <input type="radio" id={`question${questionIndex}`} name={`question${questionIndex}`} value={answer} onClick={handleAnswerChange} />
            <label htmlFor={`question${questionIndex}`}>{newAnswer2}</label>
          </div>
        );
      })
    }
    </div>
    <button onClick={handleAnswerSubmit} className='button-answer'>Submit</button>
    </div>
  );
}