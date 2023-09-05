const getMiddleNumbers = (sqrNumber, currentNumber) => {
    
    const sqrString = sqrNumber.toString();
    const cnString = currentNumber.toString();

    if (sqrString.length === ((cnString.length) * 2)) {
        const digits = sqrString.split('').map(Number);
        const numToExtract = cnString.length
        const getMiddleNumbers = digits.slice(0, -2).slice( - numToExtract)
        return newNumber = getMiddleNumbers.reduce((accum, digit) => (accum * 10) + digit, 0);
        
    } else {
        const digits = sqrString.split('').map(Number);
        const diff = (cnString.length * 2) - (sqrString.length) 
            for (let i = 0; i < diff; i++) {
                digits.unshift(0)
                }
        const numToExtract = cnString.length
        const getMiddleNumbers = digits.slice(0, -2).slice( - numToExtract)
        return newNumber = getMiddleNumbers.reduce((accum, digit) => (accum * 10) + digit, 0);       
    }
}


module.exports = getMiddleNumbers