const poemLines = [
    "my heart still seems to flutter, whenever i see you",
    "maybe this way it's better, to watch from afar",
    "to stare & admire the beauty of the moon and the morning star",
    "to not tempt fate, to not make destiny work,",
    "to say to myself, maybe one day i'll forget,",
    "... that we ever met",
    "let you be my reminder of how fate happens,",
    "that perhaps i was in the right place and time,",
    "yet was not destined to be"
];

const container = document.getElementById('poem-container');
const cursor = document.getElementById('cursor');

function revealLineByLine(lineIndex) {
    if (lineIndex < poemLines.length) {
        const line = poemLines[lineIndex];
        let letterIndex = 0;

        const revealInterval = setInterval(() => {
            if (letterIndex < line.length) {
                const currentChar = line[letterIndex];

                // Create a span for each letter
                const charElement = document.createElement('span');
                charElement.textContent = currentChar === ' ' ? '\u00A0' : currentChar; // Use non-breaking space
                charElement.style.opacity = 0; // Start hidden
                charElement.style.transition = 'opacity 0.3s ease'; // Set transition for fade-in
                container.appendChild(charElement);

                // Trigger the fade-in
                setTimeout(() => {
                    charElement.style.opacity = 1; // Make it visible
                }, 10); // Small delay to trigger the CSS transition

                letterIndex++;
            } else {
                clearInterval(revealInterval); // Stop when the line is fully revealed

                // Wait for the line to be fully rendered before positioning the cursor
                setTimeout(() => {
                    const lastChar = container.lastChild; // Get the last character of the line
                    cursor.style.left = `${lastChar.offsetLeft + lastChar.offsetWidth}px`; // Align cursor after last character
                }, 50); // Small delay to ensure the layout is updated

                setTimeout(() => {
                    container.appendChild(document.createElement('br')); // Add a line break
                    revealLineByLine(lineIndex + 1); // Move to the next line
                }, 1000); // Wait before showing the next line (1 second)
            }
        }, 150); // Adjust time between letters (150ms for typewriter effect)
    } else {
        cursor.style.display = 'none'; // Hide cursor after all lines are revealed
    }
}

// Start revealing the first line
revealLineByLine(0);
