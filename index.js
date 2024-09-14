const questions = [
    {
        question: "What was our first date?",
        answers: [
            { text: "When we met on Vegas mall", correct: false },
            { text: "Movie at home", correct: true },
        ]
    },
    {
        question: "What's my favorite color?",
        answers: [
            { text: "Red", correct: false },
            { text: "Blue", correct: false },
            { text: "Brown", correct: true },
            { text: "Purple", correct: false }
        ]
    },
    {
        question: "When did we first say 'I love you'?",
        answers: [
            { text: "On our first date", correct: true },
            { text: "In Vegas", correct: false },
            { text: "When you were in Train", correct: false },
        ]
    },
    {
        question: "What’s our favorite restaurant?",
        answers: [
            { text: "Dominos", correct: false },
            { text: "KFC", correct: true },
            { text: "Burger King", correct: false },
        ]
    },
    {
        question: "Who is the most beautiful women",
        answers: [
            { text: "Khushi", correct: true },
            { text: "Khushi", correct: true },
            { text: "Khushi", correct: true },
        ]
    },

    {
        question: "Who is the most handsome man",
        answers: [
            { text: "Mohit", correct: true },
            { text: "Zayn Malik", correct: false },
           
        ]
    }
];


    let currentQuestionIndex = 0;
    let score = 0;

    const questionContainer = document.getElementById('question-container');
    const answerButtons = document.getElementById('answer-buttons');
    const nextButton = document.getElementById('next-button');
    const result = document.getElementById('result');
    const scoreDisplay = document.getElementById('score');
    const playAgainButton = document.getElementById('play-again');

    function startGame() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.classList.add('hidden');
        result.classList.add('hidden');
        scoreDisplay.innerText = '0 / ' + questions.length; // Reset score display
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.remove('hidden'); // Show next button for the first question
        playAgainButton.classList.add('hidden'); // Hide play again button
    }
    
    function showQuestion(question) {
        questionContainer.innerText = question.question;
        answerButtons.innerHTML = '';
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            button.addEventListener('click', () => selectAnswer(answer));
            answerButtons.appendChild(button);
        });
    }

    function selectAnswer(answer) {
        const correct = answer.correct;
        if (correct) {
            score++;
        }
        Array.from(answerButtons.children).forEach(button => {
            button.disabled = true;
        });
        nextButton.classList.remove('hidden');
    }

    function showNextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
            nextButton.classList.add('hidden');
        } else {
            showResult();
        }
    }

    function showResult() {
        scoreDisplay.innerText = `${score} / ${questions.length}`;
        result.classList.remove('hidden');
        nextButton.classList.add('hidden'); // Hide next button after results
        playAgainButton.classList.remove('hidden'); // Show play again button

           // Check for perfect score
    if (score === questions.length) {
        playPerfectScoreAudio();  // Play audio if the score is perfect
    }
}

function playPerfectScoreAudio() {
    audio.play();  // Play the audio
    }
    

    

    nextButton.addEventListener('click', showNextQuestion);
    playAgainButton.addEventListener('click', startGame);

    startGame();
