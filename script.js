const specificWords = ["fine?", "let me know", "gods don't bleed", "okay", "oragon", "pawi swims", "okah", "great", "do you really think you have the answer to everything?"];

// Function to get a random character
function getRandomCharacter() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return characters.charAt(Math.floor(Math.random() * characters.length));
}

function getRandomPosition() {
    const x = Math.random() * (window.innerWidth - 100); // Ensure it fits within the viewport
    const y = Math.random() * (window.innerHeight - 50); // Ensure it fits within the viewport
    return { x, y };
}

function createWordElement(content, isSpecific) {
    const wordElement = document.createElement('div');
    wordElement.className = 'word'; // Base class for all words
    wordElement.textContent = content; // Set the content

    // Apply specific styles for specific words
    if (isSpecific) {
        wordElement.style.color = 'red'; // Change specific word color to red
    }

    document.body.appendChild(wordElement);
    return wordElement;
}

function showWord() {
    const isSpecificWord = Math.random() < 0.05; // 20% chance to show a specific word
    let content;

    if (isSpecificWord) {
        content = specificWords[Math.floor(Math.random() * specificWords.length)]; // Show a specific word
    } else {
        content = getRandomCharacter(); // Generate a single random character
    }

    const { x, y } = getRandomPosition();
    const wordElement = createWordElement(content, isSpecificWord);

    // Set position and size
    wordElement.style.left = `${x}px`;
    wordElement.style.top = `${y}px`;

    // Set a longer duration for display and fade out
    const displayDuration = Math.random() * 200 + 100; // Show for random duration
    const fadeOutDuration = 1500; // Longer duration for fade out

    // Set a timeout for fading out
    setTimeout(() => {
        wordElement.style.opacity = 0; // Start fade out
        setTimeout(() => {
            document.body.removeChild(wordElement);
        }, fadeOutDuration); // Match this with the CSS transition duration
    }, displayDuration); // Show for random duration
}

// Create and position the centered text
function createCenteredText() {
    const centeredText = document.createElement('div');
    centeredText.className = 'centered'; // Apply centered style
    centeredText.textContent = "how are you?";
    document.body.appendChild(centeredText);
}

// Clock element
const clockElement = document.createElement('div');
clockElement.className = 'timer'; // Class for styling
document.body.appendChild(clockElement);

// Function to update the clock every second
function startClock() {
    let secondsElapsed = 0;

    setInterval(() => {
        secondsElapsed++;
        clockElement.textContent = secondsElapsed; // Show just the number
    }, 1000);
}

// Gradually fill the screen with specific words
function fillScreenGradually() {
    let index = 0;
    const interval = 3000; // Time between showing each specific word (in milliseconds)

    const wordInterval = setInterval(() => {
        if (index >= specificWords.length) {
            clearInterval(wordInterval); // Stop when all specific words have been displayed
            return;
        }

        const word = specificWords[index];
        const { x, y } = getRandomPosition(); // Get random position for each word
        const wordElement = createWordElement(word, true); // Create a specific word element

        // Set random position for the word
        wordElement.style.left = `${x}px`;
        wordElement.style.top = `${y}px`;

        index++; // Move to the next specific word
    }, interval); // Adjust this interval for how quickly words appear

    // Remove words after 30 seconds
    setTimeout(() => {
        document.body.innerHTML = ''; // Clear the screen after 30 seconds
        createCenteredText(); // Keep the centered text
    }, 30000); // 30 seconds for visibility
}

// Call the function to create the centered text
createCenteredText();

// Increase frequency of new characters appearing
setInterval(showWord, 20); // Show a new word or character every 200 milliseconds

// Start the clock

// After 11 seconds, start filling the screen with specific words gradually
setTimeout(fillScreenGradually, 11000);
