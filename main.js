// 
// Kurs JS - Ćwiczenia > pseudolosowość
// 

const button = document.getElementById("draw-btn");
const messageDiv = document.getElementById("show-message");
const addButton = document.getElementById("add-new");
const input = document.getElementById("new-input");

messageDiv.textContent = "Youkai is a creature from japanese folklore";

const youkai = ["Tengu", "Kappa", "Satori", "Yanari", "Yousei", "Bakeneko"];
let youkaiName = "";

// pseudoprawdopodobieństwo z obieku Math:
const drawFolkloreMonster = function() {
// console.log(Math.floor(Math.random() * youkai.length));
// losowanie liczby indeksu::::;
let index = Math.floor(Math.random() * youkai.length);
console.log(youkai[index]);
let monsterName = youkai[index];
messageDiv.textContent = monsterName;

}

// function to add names to youkai array:
const addNewYoukaiName = function(value){
    youkaiName = input.value;
    if (input.value === ""){
        return
    } else {
         // if youkai name is already in array?:::::
    for (item of youkai){
        if (item.toLowerCase() === youkaiName.toLowerCase()) {
            console.log(`this youkai >>${item}<< is already in an array`)
            return
        }
    }
    }
   


    console.log(input.value);
    // add to array::::
    youkai.push(youkaiName);
    input.value = '';
    console.log(youkai);
}


// add new youkai name button event and function:::
addButton.addEventListener("click", addNewYoukaiName);

// draw youkai name button event and function:::::
button.addEventListener("click", drawFolkloreMonster);