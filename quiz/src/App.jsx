import './App.css'
import { getDefaultQuiz, getSessionToken } from './api/api'
import { useEffect, useState } from 'react';
import Welcome from './components/welcome';

function App() {
  const [questions, setQuestions] = useState([]);
  const [token, setToken] = useState('')

  useEffect(() => {
    const getQuiz = async () => {
      const quiz = await getDefaultQuiz();
      const token = await getSessionToken();
      setQuestions(quiz);
      setToken(token);
    };
  
    getQuiz(); 
  
    return () => {
      // this now gets called when the component unmounts
    };
  }, []);


  return (
    <div>
      <Welcome />
    </div>
    
  )
}

export default App
