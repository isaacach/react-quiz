import "./App.css";
// import { getDefaultQuiz, getSessionToken } from "./api/api";
import { useEffect, useState } from "react";
import Welcome from "./components/welcome";

function App() {
  const [categorySelection, setCategorySelection] = useState(null);
  const [difficultySelection, setDifficultySelection] = useState(null);
  // const [questions, setQuestions] = useState([]);
  // const [token, setToken] = useState("");

  const handleCategorySelect = (option) => {
    setCategorySelection(option);
  };

  const handleDifficultySelect = (option) => {
    setDifficultySelection(option);
  };

  const handleSubmit = () => {
    console.log(categorySelection);
    console.log(difficultySelection);
  };

  useEffect(() => {

    return () => {
      // this now gets called when the component unmounts
    };
  }, []);

  return (
    <div>
      <Welcome
        onCategoryChange={handleCategorySelect}
        onDifficultyChange={handleDifficultySelect}
        onsubmit={handleSubmit}
        category={categorySelection}
        difficulty={difficultySelection}
      />
    </div>
  );
}

export default App;
