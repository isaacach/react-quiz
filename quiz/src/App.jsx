import "./App.css";
import { getQuizWithParams } from "./api/api";
import { useEffect, useState } from "react";
import Welcome from "./components/welcome";
import Question from "./components/question";
import Results from "./components/results";
import { getRandomInt } from "./utils/random";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [categorySelection, setCategorySelection] = useState(null);
  const [difficultySelection, setDifficultySelection] = useState(null);
  const [questionsSelection, setQuestionsSelection] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [questionsIndex, setQuestionsIndex] = useState(0);

  const handleCategorySelect = (option) => {
    setCategorySelection(option);
  };

  const handleDifficultySelect = (option) => {
    setDifficultySelection(option);
  };

  const handleQuestionsSelect = (option) => {
    setQuestionsSelection(option);
  };

  const fetchQuiz = async () => {
    const quiz = await getQuizWithParams(
      questionsSelection ? questionsSelection : 50,
      categorySelection ? categorySelection.value : "any",
      difficultySelection ? difficultySelection.value : "any"
    );
    quiz.map((question) => {
      let randomIndex = getRandomInt(question.incorrect_answers.length);
      question.answers = [...question.incorrect_answers];
      question.answers.splice(randomIndex, 0, question.correct_answer);
    });

    setQuestions(quiz);
  };

  const handleSubmit = async () => {
    fetchQuiz();
    setShowWelcome(false);
  };

  const handleAddAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (questionsIndex === questions.length - 1) {
      setShowQuestions(false);
      setShowResults(true);
    } else{
      setQuestionsIndex(questionsIndex + 1);
    }
  };

  if (questionsIndex + 1 < questions.length > 0 && !showQuestions) {
    setShowQuestions(true);
  }

  return (
    <div>
      {showWelcome && (
        <Welcome
          onCategoryChange={handleCategorySelect}
          onDifficultyChange={handleDifficultySelect}
          onQuestionsChange={handleQuestionsSelect}
          onsubmit={handleSubmit}
          category={categorySelection}
          difficulty={difficultySelection}
        />
      )}
      <div>
        {showQuestions && (
          <Question
            question={questions[questionsIndex]}
            questionIndex={questionsIndex}
            onAnswerChange={handleAddAnswer}
          />
        )}
        {showResults && <Results answers={answers}/>}
      </div>
    </div>
  );
}

export default App;
