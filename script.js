const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: Math.floor(columns) }).fill(1);
const specificWord = "MATRIX"; // Word to show occasionally

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Fade effect
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#0F0'; // Green color for characters
    ctx.font = `${fontSize}px monospace`;
    
    for (let i = 0; i < drops.length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        const isSpecificWord = Math.random() < 0.05; // 5% chance to show specific word
        
        ctx.fillText(
            isSpecificWord ? specificWord : characters[randomIndex],
            i * fontSize,
            drops[i] * fontSize
        );

        // Reset drop to the top after it goes out of the canvas
        if (drops[i] * fontSize > canvas.height && !isSpecificWord) {
            drops[i] = 0;
        }
        
        // Increment drop position
        drops[i]++;
    }
}

setInterval(draw, 50);
