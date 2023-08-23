import "./App.css";
import { getQuizWithParams} from "./api/api";
import { useEffect, useState } from "react";
import Welcome from "./components/welcome";
import Question from "./components/question";

function App() {
  const [categorySelection, setCategorySelection] = useState(null);
  const [difficultySelection, setDifficultySelection] = useState(null);
  const [questionsSelection, setQuestionsSelection] = useState(null);
  const [questions, setQuestions] = useState([]);

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
      categorySelection ? categorySelection.value : 'any',
      difficultySelection ? difficultySelection.value : 'any'
    );
    setQuestions(quiz);
  };

  const handleSubmit = async () => {
    fetchQuiz();
  };

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  return (
    <div>
      <Welcome
        onCategoryChange={handleCategorySelect}
        onDifficultyChange={handleDifficultySelect}
        onQuestionsChange={handleQuestionsSelect}
        onsubmit={handleSubmit}
        category={categorySelection}
        difficulty={difficultySelection}
      />
      <div>
      {questions.map((question) => {
        return (
          <Question question={question} />
        );
      }}
      </div>
    </div>
  );

export default App;
