let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;

console.log(saveEl);

function increment() {
    
    count += 1;
    countEl.innerText = count;
    console.log(count);
}

function decrement () {
    count -= 1;
    countEl.textContent = count;
    console.log(count);
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    
    count = 0;
    countEl.textContent = 0;

    console.log(count);
}

save();



// let welcomeEl = document.getElementById("welcome-el");

// let userName = "Asante";
// let greeting = "welcome back";

// welcomeEl.innerText = userName + ", " + greeting;
// welcomeEl.innerText += " 👍🏿";


