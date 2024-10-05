const quizData =  [
    {
        question: "Which planet is known as the Red Planet?",
        a:"Earth", b:"Mars", c:"Jupiter", d:"Saturn",
        correct: "Mars"
    },
    {
        question: "Which is the largest planet in the solar system?",
        a:"Earth", b:"Mars", c:"Jupiter", d:"Venus",
        correct: "Jupiter"
    },
    {
        question: "Which planet is closest to the sun?",
        a:"Mercury", b:"Venus", c:"Earth", d:"Mars",
        correct: "Mercury"
    },
    {
        question: "Which planet is known for its beautiful rings?",
        a:"Saturn", b:"Jupiter", c:"Uranus", d:"Neptune",
        correct: "Saturn"
    },
    {
        question: "Which planet is the hottest in the solar system?",
        a:"Mercury", b:"Venus", c:"Earth", d:"Mars",
        correct: "Venus"
    },
    {
        question: "Which planet has the most moons?",
        a:"Jupiter", b:"Saturn", c:"Uranus", d:"Neptune",
        correct: "Saturn"
    },
    {
        question: "Which is the smallest planet in the solar system?",
        a:"Mercury", b:"Venus", c:"Earth", d:"Mars",
        correct: "Mercury"
    },
    {
        question: "What is the name of Earth's satellite?",
        a:"Europa", b:"Ganymede", c:"The Moon", d:"Titan",
        correct: "The Moon"
    },
    {
        question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        a:"Mars", b:"Mercury", c:"Venus", d:"Jupiter",
        correct: "Venus"
    },
    {
        question: "Which planet has the strongest winds in the solar system?",
        a:"Neptune", b:"Mars", c:"Earth", d:"Jupiter",
        correct: "Neptune"
    }
];

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const resultBox = document.getElementById('result');
const scoreText = document.getElementById('score');
const reloadBtn = document.getElementById('reload');

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.style.display = 'none';
            resultBox.style.display = 'block';
            scoreText.innerText = `You answered ${score}/${quizData.length} questions correctly.`;
        }
    }
});

reloadBtn.addEventListener('click', () => {
    currentQuiz = 0;
    score = 0;
    resultBox.style.display = 'none';
    quiz.style.display = 'block';
    loadQuiz();
});

loadQuiz();