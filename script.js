// Before anyone gets mad, I am aware <input type="number" /> exists, but I chose to not use it for the extra fun of coding the JavaScript to do it.

let btn = document.querySelector('#submit');
let input = document.querySelector('#input');
let output = document.querySelector('#output');

const allowedChars = ['!', '%', '^', '*', '(', ')', '[', ']', '<', '>', '+', '-', '/'];
const responses = ['Output: Nice try 🫵', 'Output: Nope ❌', 'Output: Nada', 'Output: Try again with numbers this time', 'Output: document.querySelector(\'#output\').textContent = responses[randInt];', 'Output: Importing numpy...'];

btn.addEventListener('click', calc);
document.onkeyup = function(eventKeyName) {
    eventKeyName = eventKeyName || window.event;
    if (eventKeyName.key == 'Enter') {
        btn.click();
    }
}

function isAllowed(input) {
    let isAllowed = false;

    for (i = 0; i < input.length; i++) {
        let tempAllowed = true;
        if (isNaN(input[i]) == true) {
            tempAllowed = false;
        }

        if (allowedChars.indexOf(input[i]) == -1) {
            tempAllowed = false;
        } else {
            tempAllowed = true;
        }

        if (isNaN(input[i]) == false) {
            tempAllowed = true;
        }
        
        if (tempAllowed == true) {
            isAllowed = true;
        } else {
            isAllowed = false;
            break;
        }
    }
    console.log(isAllowed);
    if (isAllowed == false) {
        return false;
    } else {
        return true;
    }
}

function calc() {
    let value = input.value.toString();
    let allowed = isAllowed(value);
    let randInt = Math.floor(responses.length * Math.random());
    if (allowed == false) {
        output.textContent = responses[randInt];
    } else {
        output.textContent = "Output: " + Math.floor(2147483647 * Math.random());
    }
}