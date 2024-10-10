const phrases = ["pawi", ";)", "how are you", "i'm here", "not unreachable", "but here", "dear name", "am i fine?", "is this okay?", "you can reach out", "it's okay", "be safe", "always", "beautiful like the moon", "i will be back", "you can thank", "the stars", "all you want but", "i'll always be the lucky one"];
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

let container = document.getElementById('container');

function getRandomPhrase() {
    return phrases[Math.floor(Math.random() * phrases.length)];
}

function getRandomChar() {
    return chars.charAt(Math.floor(Math.random() * chars.length));
}

function getRandomPosition() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const randomTop = Math.floor(Math.random() * windowHeight) + 'px';
    const randomLeft = Math.floor(Math.random() * windowWidth) + 'px';
    return { top: randomTop, left: randomLeft };
}

function createDiv(type) {
    const div = document.createElement('div');
    div.classList.add(type);
    div.style.transform = 'scale(0.5)'; // Initial scale
    div.style.opacity = '1'; // Initial opacity
    return div;
}

function showElement(type, content, position) {
    const div = createDiv(type);
    container.appendChild(div);
    div.innerHTML = content;
    div.style.top = position.top;
    div.style.left = position.left;

    requestAnimationFrame(() => {
        div.style.transform = 'scale(2)'; // Grow to 200%
        div.style.opacity = '0';
    });

    setTimeout(() => {
        container.removeChild(div);
    }, 2000); // Ensure the element is removed after animation
}

function showRandomChar() {
    for (let i = 0; i < 11; i++) {
        const position = getRandomPosition();
        const char = getRandomChar();
        setTimeout(() => showElement('character', char, position), Math.random() * 1000); // Staggered random appearance
    }
}

function showPhraseHorizontally() {
    const phrase = getRandomPhrase();
    const words = phrase.split(" ");
    const startPosition = getRandomPosition();

    words.forEach((word, index) => {
        const position = {
            top: startPosition.top,
            left: `calc(${startPosition.left} + ${index * 5}em)`
        };

        setTimeout(() => showElement('word', word, position), index * 1000); // Stagger the appearance of each word
    });
}

function showWordWithProbability() {
    const probability = Math.random();
    if (probability <= 0.15) { // 15% chance to show a phrase
        showPhraseHorizontally();
    }
}

setInterval(showWordWithProbability, 2000); // Check probability and possibly show a phrase every 2 seconds

setInterval(showRandomChar, 2000); // Refresh characters every 2 seconds
