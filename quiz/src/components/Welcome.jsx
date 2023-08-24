/* eslint-disable react/prop-types */
import { useState } from "react";
import Dropdown from "./Dropdown";

export default function Welcome({ onCategoryChange, onDifficultyChange, onQuestionsChange, onsubmit, category, difficulty }) {
  const [numberChoice, setNumberChoice] = useState(50);
  

  const handleCategoryChange = (option) => {
    onCategoryChange(option);
  };

  const handleDifficultyChange = (option) => {
    onDifficultyChange(option);
  };

  const handleQuestionsChange = (event) => {
    setNumberChoice(event.target.value);
    onQuestionsChange(event.target.value);
  };

  const handleClick = () => {
    onsubmit(true);
  };

  const dropdownCategoryOptions = [
    {
      id: 1,
      label: "Any Category",
      value: "any",
    },
    {
      id: 2,
      label: "General Knowledge",
      value: "9",
    },
    {
      id: 3,
      label: "Entertainment: Books",
      value: "10",
    },
    {
      id: 4,
      label: "Entertainment: Film",
      value: "11",
    },
    {
      id: 5,
      label: "Entertainment: Music",
      value: "12",
    },
    {
      id: 6,
      label: "Entertainment: Musicals &amp; Theatres",
      value: "13",
    },
    {
      id: 7,
      label: "Entertainment: Television",
      value: "14",
    },
    {
      id: 8,
      label: "Entertainment: Video Games",
      value: "15",
    },
    {
      id: 9,
      label: "Entertainment: Board Games",
      value: "16",
    },
    {
      id: 10,
      label: "Science &amp; Nature",
      value: "17",
    },
    {
      id: 11,
      label: "Science: Computers",
      value: "18",
    },
    {
      id: 12,
      label: "Science: Mathematics",
      value: "19",
    },
    {
      id: 13,
      label: "Mythology",
      value: "20",
    },
    {
      id: 14,
      label: "Sports",
      value: "21",
    },
    {
      id: 15,
      label: "Geography",
      value: "22",
    },
    {
      id: 16,
      label: "History",
      value: "23",
    },
    {
      id: 17,
      label: "Politics",
      value: "24",
    },
    {
      id: 18,
      label: "Art",
      value: "25",
    },
    {
      id: 19,
      label: "Celebrities",
      value: "26",
    },
    {
      id: 20,
      label: "Animals",
      value: "27",
    },
    {
      id: 21,
      label: "Vehicles",
      value: "28",
    },
    {
      id: 22,
      label: "Entertainment: Comics",
      value: "29",
    },
    {
      id: 23,
      label: "Science: Gadgets",
      value: "30",
    },
    {
      id: 24,
      label: "Entertainment: Japanese Anime &amp; Manga",
      value: "31",
    },
    {
      id: 25,
      label: "Entertainment: Cartoon &amp; Animations",
      value: "32",
    },
  ];

  const dropdownDifficultyOptions = [
    {
      id: 1,
      label: "Any Difficulty",
      value: "any",
    },
    {
      id: 2,
      label: "Easy",
      value: "easy",
    },
    {
      id: 3,
      label: "Medium",
      value: "medium",
    },
    {
      id: 4,
      label: "Hard",
      value: "hard",
    },
  ];

  return (
    <div>
      <h1>Test your knowledge</h1>
      <form>
        <div className="form-block">
          <label htmlFor="questions">Number of questions <span className="question-choice">{numberChoice}</span></label>
          <input
            name="questions"
            type="range"
            min={10}
            max={50}
            onChange={handleQuestionsChange}
          />
        </div>
        <div className="form-block">
          <label htmlFor="category">Category</label>
          <Dropdown
            options={dropdownCategoryOptions}
            value={category}
            onChange={handleCategoryChange}
          />
        </div>
        <div className="form-block">
          <label htmlFor="difficulty">Difficulty</label>
          <Dropdown
            options={dropdownDifficultyOptions}
            value={difficulty}
            onChange={handleDifficultyChange}
          />
        </div>
      </form>
      <button className='submit-welcome' onClick={handleClick}>Start</button>
    </div>
  );
}
