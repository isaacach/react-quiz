import { getRandomInt } from "../utils/random";

export default function Question({ question }) {
  return (
    <div>
      <h3>{question.question}</h3>
      {question.incorrect_answers.map((answer) => {
        return (
          <div>
            <input type="radio" id={answer} name="answer" value={answer} />
          </div>
        );
      })
      }
    </div>
  );
}