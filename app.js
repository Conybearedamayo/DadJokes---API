// API Endpoint
const apiUrl = "https://v2.jokeapi.dev/joke/Any";

// DOM Elements
const getRandomJokeButton = document.getElementById('getRandomJoke');
const jokeContainer = document.getElementById('jokeContainer');

// Fetch a random joke from the API
const fetchRandomJoke = async() => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if the joke is single or two-part
        if (data.type === "single") {
            jokeContainer.innerHTML = `<p>${data.joke}</p>`;
        } else {
            jokeContainer.innerHTML = `<p>${data.setup}</p>;
                <p>${data.delivery}</p>`;
        }
    } catch (error) {
        jokeContainer.innerHTML = ` < p > Failed to fetch a joke.Please
                try again later. < /p>`;
        console.error("Error fetching joke:", error);
    }
};