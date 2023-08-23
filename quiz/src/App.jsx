import "./App.css";
import { getQuizWithParams } from "./api/api";
import { useEffect, useState } from "react";
import Welcome from "./components/welcome";
import Question from "./components/question";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [categorySelection, setCategorySelection] = useState(null);
  const [difficultySelection, setDifficultySelection] = useState(null);
  const [questionsSelection, setQuestionsSelection] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [questionsIndex, setQuestionsIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

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
      questionsSelection ? questionsSelection : 10,
      categorySelection ? categorySelection.value : "any",
      difficultySelection ? difficultySelection.value : "any"
    );
    setQuestions(quiz);
  };

  const handleSubmit = async () => {
    fetchQuiz();
    setShowWelcome(false);
  };

  const handleAddAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setQuestionsIndex(questionsIndex + 1);
  };

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  useEffect(() => {
    console.log(answers);
  }, [answers]);

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
        {questions.length > 0 &&
          <Question
            question={questions[questionsIndex]}
            questionIndex={questionsIndex}
            onAnswerChange={handleAddAnswer}
          />
        }
      </div>
    </div>
  );
}

export default App;
