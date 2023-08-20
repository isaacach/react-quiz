import './App.css'
import { getDefaultQuiz, getSessionToken } from './api/api'
import { useEffect, useState } from 'react';

function App() {
  const [questions, setQuestions] = useState([]);
  const [token, setToken] = useState('')

  useEffect(() => {
    const getQuiz = async () => {
      const quiz = await getDefaultQuiz();
      const token = await getSessionToken();
      setQuestions(quiz);
      setToken(token)
    };
  
    getQuiz(); // run it, run it
  
    return () => {
      // this now gets called when the component unmounts
    };
  }, []);


  return (
    <div>
      {questions}
    </div>
    
  )
}

export default App
