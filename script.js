const poemLines = [
    "my heart still seems to flutter, whenever i see you",
    "maybe this way it's better, to watch from a far",
    "to stare & admire the beauty of the moon and the morning star",
    "to not tempt fate, to not make destiny work,",
    "to say to myself, maybe yes, maybe one day i'll forget,",
    "maybe one day i'll forget that we ever met",
];

const container = document.getElementById('poem-container');

function showNextLine(index) {
    if (index < poemLines.length) {
        const lineElement = document.createElement('div');
        lineElement.className = 'poem-line';
        lineElement.textContent = poemLines[index];
        container.appendChild(lineElement);

        // Trigger fade-in
        setTimeout(() => {
            lineElement.style.opacity = 1;
        }, 100); // Small delay to trigger CSS transition

        // Show the next line after a delay
        setTimeout(() => {
            showNextLine(index + 1);
        }, 3000); // Adjust time between lines (3 seconds)
    }
}

// Start showing the poem
showNextLine(0);
