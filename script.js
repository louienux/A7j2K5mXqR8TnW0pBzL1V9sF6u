const specificWords = ["fine?", "let me know", "gods don't bleed", "okay", "oragon", "pawi swims", "okah", "great", "do you really think you have the answer to everything?"];

// Function to get a random character
function getRandomCharacter() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return characters.charAt(Math.floor(Math.random() * characters.length));
}

function getRandomPosition() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
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
    const isSpecificWord = Math.random() < 0.08; // 20% chance to show a specific word
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

// Fill the screen with specific words
function fillScreenWithSpecificWords() {
    // Clear the existing content
    document.body.innerHTML = '';

    // Create a grid of specific words
    const rows = Math.ceil(window.innerHeight / 50); // Adjust for word height
    const cols = Math.ceil(window.innerWidth / 100); // Adjust for word width

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const word = specificWords[Math.floor(Math.random() * specificWords.length)];
            const wordElement = createWordElement(word, true); // true for specific word

            // Position the words in a grid
            wordElement.style.position = 'absolute';
            wordElement.style.left = `${j * 100}px`; // Space between words
            wordElement.style.top = `${i * 50}px`; // Space between rows
        }
    }
}

// Call the function to create the centered text
createCenteredText();

// Increase frequency of new characters appearing
setInterval(showWord, 50); // Show a new word or character every 200 milliseconds

// After 11 seconds, fill the screen with specific words
setTimeout(fillScreenWithSpecificWords, 11000);

