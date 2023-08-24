/* eslint-disable react/prop-types */

export default function Results({ answers }) {
  return (
    <div>
    {answers.map((answer) => {
      return (
        <div key={answer.id}>
          <p>{answer.value}</p>
          <p>{answer.answer}</p>
        </div>
      );
    })}
    </div>
  );
}