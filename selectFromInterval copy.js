function selectFromInterval(numberArray, from, to) {
    validateNumberArray(numberArray);
    if (!isNumber(from)) {
        throw new Error('"from" must be valid number')
    }
    if (!isNumber(to)) {
        throw new Error('"to" must be valid number')
    }
    const min = Math.min(from, to);
    const max = Math.max(from, to);
    return numberArray.filter(number => min <= number && number <= max);
    
    function validateNumberArray(numberArray) {
        if (!Array.isArray(numberArray)) {
            throw new Error('"numberArray" must be an array');
        }
        const containsOnlyNumbers = numberArray.every(item => isNumber(item));
        if (!containsOnlyNumbers) {
            throw new Error('"numberArray" must contain only numbers');
        }
    }

    function isNumber(item) {
        return typeof item === 'number' && !isNaN(item);
    }
}