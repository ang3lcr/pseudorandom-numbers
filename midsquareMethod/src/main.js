const functions = require("./functions");
const prompt = require("prompt-sync")();

let currentNumber = Number(prompt("Enter a random number: "));
const limit = Number(prompt("How much number do you want to generate? "));

let randomNumbers = []

for (let i = 0; i < limit; i++) {
    const sqrNumber = functions.sqrNumber(currentNumber);
    if (functions.verifyNumber(sqrNumber, currentNumber)) {
       const newNumber = functions.getMiddleNumbers(sqrNumber);
       randomNumbers.push(newNumber);
       currentNumber = newNumber;
    } else {
        const numberWithZeros = functions.addZeros(sqrNumber, currentNumber); //array
        const newNumber = functions.getMiddleNumbers(numberWithZeros, currentNumber)
        randomNumbers.push(newNumber);
        currentNumber = newNumber;
    } 
}

console.log(randomNumbers)






