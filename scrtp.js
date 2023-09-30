
document.addEventListener("DOMContentLoaded", function() {
    const heartsContainer = document.querySelector(".hearts-container");

    // Function to create a heart element
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heartsContainer.appendChild(heart);
    }

    // Create multiple hearts
    const numberOfHearts = 200; // Adjust the number as needed
    for (let i = 0; i < numberOfHearts; i++) {
        createHeart();
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const lyrics = [
        "When I see your face",
        "There's not a thing that I would change",
        "'Cause you're amazing",
        "Just the way you are"
    ];

    const delay = 90; 
    const lyricsElement = document.getElementById("lyrics");

    async function displayLyrics() {
        for (const line of lyrics) {
            for (const char of line) {
                lyricsElement.textContent += char;
                await new Promise((resolve) => setTimeout(resolve, delay));
            }

            lyricsElement.innerHTML += "<br>";

            await new Promise((resolve) => setTimeout(resolve, delay * 10));

            lyricsElement.innerHTML = "";

            await new Promise((resolve) => setTimeout(resolve, delay * 10));
        }
    }

    displayLyrics();
});

