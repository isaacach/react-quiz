
export const getSessionToken = async () => {
    const response = await fetch('https://opentdb.com/api_token.php?command=request');
    const data = await response.json();
    console.log(data.token);
}

export const getDefaultQuiz = async () => {
    const response = await fetch('https://opentdb.com/api.php?amount=10');
    const data = await response.json();
    console.log(data.results);
}

export const getQuizWithParams = async (amount, category, difficulty) => {
    console.log(amount, category, difficulty);
    if (category === 'any' && difficulty === 'any') {
        const response = await fetch(`https://opentdb.com/api.php?amount=${amount}`);
        const data = await response.json();
        return data.results;
    }
    if (category === 'any') {
        const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`);
        const data = await response.json();
        return data.results;
    }
    if (difficulty === 'any') {
        const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}`);
        const data = await response.json();
        return data.results;
    }
    const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`);
    const data = await response.json();
    return data.results;
}