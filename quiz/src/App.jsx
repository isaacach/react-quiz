import "./App.css";
import { getQuizWithParams} from "./api/api";
import { useEffect, useState } from "react";
import Welcome from "./components/welcome";

function App() {
  const [categorySelection, setCategorySelection] = useState(null);
  const [difficultySelection, setDifficultySelection] = useState(null);
  const [questionsSelection, setQuestionsSelection] = useState(null);
  const [questions, setQuestions] = useState([]);
  // const [token, setToken] = useState("");

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
      questionsSelection,
      categorySelection.value,
      difficultySelection.value
    );
    setQuestions(quiz);
  };

  const handleSubmit = async () => {
    await fetchQuiz();
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
    </div>
  );
}

export default App;
