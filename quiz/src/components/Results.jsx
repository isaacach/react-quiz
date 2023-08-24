/* eslint-disable react/prop-types */

export default function Results({ answers }) {
  return (
    <>  
    <h1>Results</h1>
    <div className="results">
    {answers.map((answer) => {
      let isCorrect = answer.userAnswer == answer.correctAnswer;
      return (
        <div key={answer.id} className={`result-card ${isCorrect ? 'green' : 'red'}`}>
          <h3>{answer.question}</h3>
          <p>Your answer: {answer.userAnswer}</p>
          <p>Correct answer: {answer.correctAnswer}</p>
          <p>You answered {answer.userAnswer == answer.correctAnswer ? 'correctly!' : 'incorrectly :('}</p>
        </div>
      );
    })}
    </div>
    </>
  );
}