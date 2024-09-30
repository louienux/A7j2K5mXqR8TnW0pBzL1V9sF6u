function matrixRain() {
  const canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = "fixed";
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.zIndex = -1;
  document.body.appendChild(canvas);

  const context = canvas.getContext("2d");
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = [];
  const currentWordIndexes = []; // Array to keep track of current character index for specific words

  // Updated specific words to display occasionally
  const specificWords = ["oragon", "pagkakalameg", "gods don't bleed", "okay", "no no pilit"];

  for (let i = 0; i < columns; i++) {
    drops[i] = 1;
    currentWordIndexes[i] = 0; // Initialize the index for each column
  }

  function drawMatrixRain() {
    context.fillStyle = "rgba(0, 0, 0, 0.1)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "#0000FF"; // Change text color to blue
    context.font = fontSize + "px Courier";

    for (let i = 0; i < drops.length; i++) {
      const isSpecificWord = Math.random() < 0.05; // 5% chance to show a specific word
      let text;

      if (isSpecificWord) {
        text = specificWords[Math.floor(Math.random() * specificWords.length)];
        currentWordIndexes[i] = 0; // Reset index for this column
      } else {
        text = String.fromCharCode(Math.floor(Math.random() * 128));
      }

      const x = i * fontSize;
      const y = drops[i] * fontSize;

      // Only draw specific words character by character
      if (isSpecificWord) {
        if (currentWordIndexes[i] < text.length) {
          context.fillText(text[currentWordIndexes[i]], x, y);
          currentWordIndexes[i]++; // Move to the next character for this column
        }
      } else {
        // Draw random character if not showing a specific word
        context.fillText(text, x, y);
      }

      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0; // Reset the drop position
      }

      drops[i]++;
    }
  }

  setInterval(drawMatrixRain, 50);
}

// Call the function to start the effect
matrixRain();
