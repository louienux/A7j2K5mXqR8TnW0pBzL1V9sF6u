const phrases = [
    "I don't think that I even realize",
    "the joy I make you feel when you're inside my universe",
    "I held you like you're the one who's precious",
    "I hate to break it to you, but it's not the other way around",
    "You should thank your stars because",
    "you'll always be the lucky one"
];
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const middlePhraseElement = document.getElementById('middle-phrase');
let container = document.getElementById('container');
let phraseIndex = 0;

function getRandomChar() {
    return chars.charAt(Math.floor(Math.random() * chars.length));
}

function getRandomPosition() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const middlePhraseBounds = middlePhraseElement.getBoundingClientRect();
    let randomTop, randomLeft;
    do {
        randomTop = Math.random() * windowHeight + 'px';
        randomLeft = Math.random() * windowWidth + 'px';
    } while (
        randomTop >= middlePhraseBounds.top && randomTop <= middlePhraseBounds.bottom &&
        randomLeft >= middlePhraseBounds.left && randomLeft <= middlePhraseBounds.right
    );
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
        div.style.transform = 'scale(3)';
        div.style.opacity = '0';
    });
    setTimeout(() => {
        container.removeChild(div);
    }, 5000); // Match this to your CSS transition duration
}

function showRandomChar() {
    for (let i = 0; i < 11; i++) {
        const position = getRandomPosition();
        const char = getRandomChar();
        setTimeout(() => showElement('character', char, position), Math.random() * 1000); // Staggered random appearance
    }
}

function showPhrase() {
    const phrase = phrases[phraseIndex];
    phraseIndex = (phraseIndex + 1) % phrases.length; // Loop through the phrases in order
    const position = getRandomPosition();
    setTimeout(() => showElement('word', phrase, position), Math.random() * 1000); // Staggered random appearance
}

setInterval(showPhrase, 2000); // Show a phrase every 2 seconds
setInterval(showRandomChar, 2000); // Refresh characters every 2 seconds

