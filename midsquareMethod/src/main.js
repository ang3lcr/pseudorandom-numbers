const functions = require("./functions");
const prompt = require("prompt-sync")();

let currentNumber = prompt("Enter a random number: ");
const limit = prompt("How much number do you want to generate? ");

let randomNumbers = []

for (let i = 0; i < limit; i++) {
    const sqrNumber = functions.sqrNumber(currentNumber);
    const newNumber = functions.getMiddleNumbers(sqrNumber, currentNumber);
    currentNumber = newNumber
    randomNumbers.push(newNumber);
}

console.log(randomNumbers)






