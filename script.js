const poemLines = [
    "my heart still seems to flutter, whenever i see you",
    "maybe this way it's better, to watch from a far",
    "to stare & admire the beauty of the moon and the morning star",
    "to not tempt fate, to not make destiny work,",
    "to say to myself, maybe yes, maybe one day i'll forget,",
    "maybe one day i'll forget that we ever met",
];

const container = document.getElementById('poem-container');

function revealPoemLetterByLetter() {
    let letterIndex = 0;

    const revealInterval = setInterval(() => {
        if (letterIndex < poem.length) {
            const currentChar = poem[letterIndex];

            // Create a span for each letter (to manage opacity individually)
            const charElement = document.createElement('span');
            charElement.textContent = currentChar;
            charElement.style.opacity = 0; // Start hidden
            container.appendChild(charElement);

            // Fade in the character
            setTimeout(() => {
                charElement.style.transition = 'opacity 0.5s ease'; // Transition for fade-in
                charElement.style.opacity = 1; // Make it visible
            }, 10); // Small delay to trigger the CSS transition

            letterIndex++;
        } else {
            clearInterval(revealInterval); // Stop when the poem is fully revealed
        }
    }, 100); // Adjust time between letters (100ms)
}

// Start revealing the poem
revealPoemLetterByLetter()
