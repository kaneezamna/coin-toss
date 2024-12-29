function tossCoin() {
    const coin = document.getElementById("coin");
    const resultText = document.getElementById("result");

   
        // Randomly decide "Heads" or "Tails"
        const isHeads = Math.random() < 0.5;

        // Update the coin's display and background
        coin.textContent = isHeads ? "Heads" : "Tails";
        coin.style.background = isHeads
            ? "linear-gradient(45deg,  #a2aa58e8, #f49c5e)" // Heads color (green)
            : "linear-gradient(45deg, #f44336,  #a15aed)"; // Tails color (red-orange);

        // Update the result text
        resultText.textContent = isHeads ? "You got Heads!" : "You got Tails!";


       
}