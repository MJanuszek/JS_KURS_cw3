const button = document.getElementById("draw-btn");
const messageDiv = document.getElementById("show-message");

messageDiv.textContent = "Draw youkai (japanese folklore monster)";

const youkai = ["Tengu", "Kappa", "Satori", "Yanari", "Yousei", "Bakeneko"];

// pseudoprawdopodobieństwo z obieku Math:
const drawFolkloreMonster = function() {
// console.log(Math.floor(Math.random() * youkai.length));
// losowanie liczby indeksu::::;
let index = Math.floor(Math.random() * youkai.length);
console.log(youkai[index]);
let monster = youkai[index];
messageDiv.textContent = monster;

}

button.addEventListener("click", drawFolkloreMonster);