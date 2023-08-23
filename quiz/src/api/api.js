
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
    if (amount === null) {
        amount = 10;
    }
    if (category === null) {
        category = 9;
    }
    if (difficulty === null) {
        difficulty = 'easy';
    }
    const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`);
    const data = await response.json();
    return data.results;
}