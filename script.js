const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Define an array of Chinese characters
const characters = '汉字文字中国文化学习快乐程序员'; // Add more characters as needed
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: Math.floor(columns) }).fill(1);
const specificWords = ["矩阵", "你好", "世界"]; // Array of words to show occasionally

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Fade effect
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#0F0'; // Green color for characters
    ctx.font = `${fontSize}px monospace`;
    
    for (let i = 0; i < drops.length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        const isSpecificWord = Math.random() < 0.05; // 5% chance to show specific word

        // Calculate the y position for the current drop
        const dropYPosition = drops[i] * fontSize;
        const wordToDisplay = isSpecificWord ? specificWords[Math.floor(Math.random() * specificWords.length)] : characters[randomIndex];

        // Display the specific word only if it won't overlap
        if (isSpecificWord && dropYPosition + fontSize < canvas.height) {
            ctx.fillText(wordToDisplay, i * fontSize, dropYPosition);
        } else if (!isSpecificWord) {
            ctx.fillText(characters[randomIndex], i * fontSize, dropYPosition);
        }

        // Reset drop to the top after it goes out of the canvas
        if (dropYPosition > canvas.height) {
            drops[i] = 0;
        }

        // Increment drop position
        drops[i]++;
    }
}

setInterval(draw, 50);
