const poemLines = [
    "my heart still seems to flutter, whenever i see you",
    "maybe this way it's better, to watch from a far",
    "to stare & admire the beauty of the moon and the morning star",
    "to not tempt fate, to not make destiny work,",
    "to say to myself, maybe yes, maybe one day i'll forget,",
    "maybe one day i'll forget that we ever met",
];

const container = document.getElementById('poem-container');
let currentLine = 0;

// Function to show the next line of the poem
function showNextLine() {
    if (currentLine < poemLines.length) {
        const lineElement = document.createElement('div');
        lineElement.textContent = poemLines[currentLine];
        container.appendChild(lineElement);

        // Start the scrolling effect
        lineElement.animate(
            [
                { transform: 'translateX(100vw)' }, // Start off the right side
                { transform: 'translateX(-100vw)' } // End off the left side
            ],
            {
                duration: 10000, // Adjust duration for speed
                easing: 'linear',
                fill: 'forwards'
            }
        );

        currentLine++; // Move to the next line
        setTimeout(showNextLine, 12000); // Delay for the next line to show (adjust as needed)
    }
}

// Start showing the poem
showNextLine();
