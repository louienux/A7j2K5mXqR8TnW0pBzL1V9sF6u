const poem = `my heart still seems to flutter, whenever i see you
maybe this way it's better, to watch from a far
to stare & admire the beauty of the moon and the morning star
to not tempt fate, to not make destiny work,
to say to myself, maybe yes, maybe one day i'll forget,
maybe one day i'll forget that we ever met`;

const container = document.getElementById('poem-container');

function revealPoemTypewriter() {
    let letterIndex = 0;

    const revealInterval = setInterval(() => {
        if (letterIndex < poem.length) {
            const currentChar = poem[letterIndex];

            // Create a span for each letter (to manage opacity individually)
            const charElement = document.createElement('span');
            charElement.textContent = currentChar;
            container.appendChild(charElement);

            // Fade in the character
            charElement.style.opacity = 0; // Start hidden
            setTimeout(() => {
                charElement.style.transition = 'opacity 0.1s ease'; // Transition for fade-in
                charElement.style.opacity = 1; // Make it visible
            }, 10); // Small delay to trigger the CSS transition

            letterIndex++;
        } else {
            clearInterval(revealInterval); // Stop when the poem is fully revealed
        }
    }, 150); // Adjust time between letters (150ms for typewriter effect)
}

// Start revealing the poem
revealPoemTypewriter();
