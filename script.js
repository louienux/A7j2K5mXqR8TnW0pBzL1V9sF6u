const specificWords = ["fine?", "let me know", "gods don't bleed", "okay", "oragon", "pawipins!", "meow", "misyubibi"];

function getRandomPosition() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    return { x, y };
}

function getRandomCharacters(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function createWordElement(word) {
    const wordElement = document.createElement('div');
    wordElement.className = 'word'; // Ensure this applies the CSS class
    wordElement.textContent = word;
    document.body.appendChild(wordElement);
    return wordElement;
}

function showWord() {
    const isSpecificWord = Math.random() < 0.2; // 20% chance to show a specific word
    const word = isSpecificWord 
        ? specificWords[Math.floor(Math.random() * specificWords.length)]
        : getRandomCharacters(6); // Generate a string of 6 random characters

    const { x, y } = getRandomPosition();
    const wordElement = createWordElement(word);

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

// Increase frequency of new words appearing
setInterval(showWord, 200); // Show a new word every 200 milliseconds
