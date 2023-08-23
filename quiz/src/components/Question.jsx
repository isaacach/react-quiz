/* eslint-disable react/prop-types */
import { getRandomInt } from "../utils/random";

export default function Question({ question }) {
  const answers = question.incorrect_answers.filter((answer, index) => {
    return question.incorrect_answers.indexOf(answer) === index;
  });
  const randomIndex = getRandomInt(answers.length);
  answers.splice(randomIndex, 0, question.correct_answer);

  return (
    <div>
      <h3>{question.question}</h3>
      <form>
      {answers.map((answer, index) => {
        return (
          <div key={index} className="answers">
            <input type="radio" id={answer} name="answer" value={answer} />
            <label htmlFor={answer}>{answer}</label>
          </div>
        );
      })
    }
    </form>
    </div>
  );
}