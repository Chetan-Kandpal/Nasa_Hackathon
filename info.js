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
const infoSection = document.getElementById('info-section');
const backButton = document.createElement('button');
backButton.textContent = "Back to Solar System";
backButton.addEventListener('click', () => {
    document.getElementById('info-section').style.display = 'none';
    document.getElementById('solar-system').style.display = 'block';
});
infoSection.appendChild

