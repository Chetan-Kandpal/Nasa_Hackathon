// To create stars in the background
function createStars() {
    const container = document.querySelector("body");
    for (let i = 0; i < 1000; i++) {
      // Increase the number of stars to 1000
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = ".1px";
      star.style.height = ".1px";
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      container.appendChild(star);
    }
  }
  createStars();









// Quiz Data 
const quizQuestions = [
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Which is the largest planet in the solar system?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Jupiter"
    },
    {
        question: "Which planet is closest to the sun?",
        options: ["Mercury", "Venus", "Earth", "Mars"],
        answer: "Mercury"
    },
    {
        question: "Which planet is known for its beautiful rings?",
        options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
        answer: "Saturn"
    },
    {
        question: "Which planet is the hottest in the solar system?",
        options: ["Mercury", "Venus", "Earth", "Mars"],
        answer: "Venus"
    },
    {
        question: "Which planet has the most moons?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: "Saturn"
    },
    {
        question: "Which is the smallest planet in the solar system?",
        options: ["Mercury", "Venus", "Earth", "Mars"],
        answer: "Mercury"
    },
    {
        question: "What is the name of Earth's satellite?",
        options: ["Europa", "Ganymede", "The Moon", "Titan"],
        answer: "The Moon"
    },
    {
        question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        options: ["Mars", "Mercury", "Venus", "Jupiter"],
        answer: "Venus"
    },
    {
        question: "Which planet has the strongest winds in the solar system?",
        options: ["Neptune", "Mars", "Earth", "Jupiter"],
        answer: "Neptune"
    }
];

// Variables
let currentQuestionIndex = 0;
let score = 0;

// DOM Elements
const homeLink = document.getElementById('home-link');
const infoLink = document.getElementById('info-link');
const quizLink = document.getElementById('quiz-link');
const solarSystemContainer = document.getElementById('solar-system');
const infoSection = document.getElementById('info-section');
const quizSection = document.getElementById('quiz-section');

// Show Solar System and Hide Other Sections
homeLink.addEventListener('click', () => {
    solarSystemContainer.style.display = 'block';
    infoSection.style.display = 'none';
    quizSection.style.display = 'none';
});

// Show Info Section and Hide Other Sections
infoLink.addEventListener('click', () => {
    solarSystemContainer.style.display = 'none';
    infoSection.style.display = 'block';
    quizSection.style.display = 'none';
});

// Show Quiz Section and Hide Other Sections
quizLink.addEventListener('click', () => {
    solarSystemContainer.style.display = 'none';
    infoSection.style.display = 'none';
    quizSection.style.display = 'block';
    loadQuestion(); // Load the first quiz question
});

function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = ''; // Clear previous options
    currentQuestion.options.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option;
        li.addEventListener('click', () => {
            selectOption(li);
        });
        optionsElement.appendChild(li);
    });

    submitButton.disabled = true; // Disable submit button until an option is selected
}

// Handle option selection
function selectOption(selectedLi) {
    const allOptions = optionsElement.querySelectorAll('li');
    allOptions.forEach(option => option.classList.remove('selected'));
    selectedLi.classList.add('selected');
    submitButton.disabled = false; // Enable submit button when an option is selected
}

// Handle answer submission
submitButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('li.selected');
    if (selectedOption) {
        const answer = selectedOption.textContent;
        checkAnswer(answer);
    }
});


// Check if the selected answer is correct
function checkAnswer(answer) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (answer === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion(); // Load the next question
    } else {
        showResult(); // Show the final result
    }
}

// Display the quiz result
function showResult() {
    quizSection.innerHTML = `<h2>Your Score: ${score} / ${quizQuestions.length}</h2>`;
    const retryButton = document.createElement('button');
    retryButton.textContent = "Try Again";
    retryButton.addEventListener('click', () => {
        currentQuestionIndex = 0;
        score = 0;
        quizSection.innerHTML = ''; // Reset quiz content
        loadQuestion();
    });
    quizSection.appendChild(retryButton);
}



// Planet data with info about each planet
const planetData = {
    mercury: {
        name: "Mercury",
        info: "Mercury is the closest planet to the sun and the smallest planet in the solar system."
    },
    venus: {
        name: "Venus",
        info: "Venus is known as Earth's twin because of its similar size, but it has a toxic atmosphere."
    },
    earth: {
        name: "Earth",
        info: "Earth is the third planet from the sun and the only planet known to support life."
    },
    mars: {
        name: "Mars",
        info: "Mars, the Red Planet, is known for its iron-rich soil and has the largest volcano in the solar system."
    },
    jupiter: {
        name: "Jupiter",
        info: "Jupiter is the largest planet in the solar system and has a giant storm called the Great Red Spot."
    },
    saturn: {
        name: "Saturn",
        info: "Saturn is famous for its stunning ring system, made of ice and rock."
    },
    uranus: {
        name: "Uranus",
        info: "Uranus has a unique tilt, rotating on its side, and it has faint rings."
    },
    neptune: {
        name: "Neptune",
        info: "Neptune is known for its intense blue color and the fastest winds in the solar system."
    }
};

// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to each planet
    document.getElementById('planet-mercury').addEventListener('click', () => showPlanetInfo('mercury'));
    document.getElementById('planet-venus').addEventListener('click', () => showPlanetInfo('venus'));
    document.getElementById('planet-earth').addEventListener('click', () => showPlanetInfo('earth'));
    document.getElementById('planet-mars').addEventListener('click', () => showPlanetInfo('mars'));
    document.getElementById('planet-jupiter').addEventListener('click', () => showPlanetInfo('jupiter'));
    document.getElementById('planet-saturn').addEventListener('click', () => showPlanetInfo('saturn'));
    document.getElementById('planet-uranus').addEventListener('click', () => showPlanetInfo('uranus'));
    document.getElementById('planet-neptune').addEventListener('click', () => showPlanetInfo('neptune'));
});

// Function to show the planet info section
function showPlanetInfo(planetKey) {
    const planet = planetData[planetKey];

    // Update the content of the info section
    document.getElementById('planet-name').textContent = planet.name;
    document.getElementById('planet-info').textContent = planet.info;

    // Hide solar system and show info section
    document.getElementById('solar-system').style.display = 'none';
    document.getElementById('info-section').style.display = 'block';
}

// Add a back button to return to the solar system view
const info_Section = document.getElementById('info-section');
const backButton = document.createElement('button');
backButton.textContent = "Back to Solar System";
backButton.addEventListener('click', () => {
    document.getElementById('info-section').style.display = 'none';
    document.getElementById('solar-system').style.display = 'block';
});
infoSection.appendChild


