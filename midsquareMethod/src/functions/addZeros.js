const addZeros  = (sqrNumber, currentNumber) => {
    const sqrDigits = sqrNumber.toString().split('').map(Number);
    const cnDigits = currentNumber.toString().split('').map(Number);
    const diff = (cnDigits.length * 2) - sqrDigits.length;

    for (let i = 0; i < diff; i++) {
        sqrDigits.unshift(0);  
    }

    return Number(sqrDigits.join(''))
}

console.log(addZeros(1234, 123))

module.exports = addZeros;
