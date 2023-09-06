const getMiddleNumbers = (sqrNumber, currentNumber) => {
    const sqrDigits = sqrNumber.toString().split('').map(Number);
    const cnDigits = currentNumber.toString().split('').map(Number);
    const middleNumbers = sqrDigits.slice(0, -2)
        .slice( - cnDigits.length)
    
    return Number(middleNumbers.join(''))
}


module.exports = getMiddleNumbers