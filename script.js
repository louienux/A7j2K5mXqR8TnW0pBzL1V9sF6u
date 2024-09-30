const poemLines = [
    "my heart still seems to flutter, whenever i see you",
    "maybe this way it's better, to watch from a far",
    "to stare & admire the beauty of the moon and the morning star",
    "to not tempt fate, to not make destiny work,",
    "to say to myself, maybe yes, maybe one day i'll forget,",
    "maybe one day i'll forget that we ever met",
];

const container = document.getElementById('poem-container');

function revealLineByLetter(line, index) {
    const lineElement = document.createElement('div');
    lineElement.className = 'poem-line';
    container.appendChild(lineElement);

    let letterIndex = 0;

    const revealInterval = setInterval(() => {
        if (letterIndex < line.length) {
            lineElement.textContent += line[letterIndex]; // Add one letter at a time
            letterIndex++;
        } else {
            clearInterval(revealInterval); // Stop when the line is fully revealed
            setTimeout(() => {
                showNextLine(index + 1); // Move to the next line after a delay
            }, 2000); // Adjust time before showing next line (2 seconds)
        }
    }, 100); // Adjust time between letters (100ms)
}

function showNextLine(index) {
    if (index < poemLines.length) {
        revealLineByLetter(poemLines[index], index); // Reveal line letter by letter
    }
}

// Start showing the poem
showNextLine(0);
