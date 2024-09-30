const specificWords = ["fine?", "let me know", "gods don't bleed", "okay", "oragon", "pawipins!", "meow", "misyubibi"];

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

function createWordElement(character, isSpecific) {
    const wordElement = document.createElement('div');
    wordElement.className = 'word'; // Base class for all words
    wordElement.textContent = character; // Set the random character

    // Apply specific styles for specific words
    if (isSpecific) {
        wordElement.style.color = 'red'; // Change specific word color to red
    }

    document.body.appendChild(wordElement);
    return wordElement;
}

function showWord() {
    const isSpecificWord = Math.random() < 0.15; // 20% chance to show a specific word
    let character;

    if (isSpecificWord) {
        const specificWord = specificWords[Math.floor(Math.random() * specificWords.length)];
        character = specificWord[0]; // Show first letter of specific words
    } else {
        character = getRandomCharacter(); // Generate a single random character
    }

    const { x, y } = getRandomPosition();
    const wordElement = createWordElement(character, isSpecificWord);

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

// Call the function to create the centered text
createCenteredText();

// Increase frequency of new characters appearing
setInterval(showWord, 100); // Show a new character every 200 milliseconds
