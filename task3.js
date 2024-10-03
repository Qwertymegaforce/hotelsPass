function determinePrimeNumbersInRange(minValue, maxValue) {
    
    let resultedListOfPrimeNumbers = []

    for(possiblePrimeNumber = minValue; possiblePrimeNumber <= maxValue; possiblePrimeNumber++) {
        
        if (possiblePrimeNumber == 2) {
            resultedListOfPrimeNumbers.push(possiblePrimeNumber)
            continue
        }

        for(divider = 2; divider < possiblePrimeNumber; divider ++) {
            if (possiblePrimeNumber % divider == 0) break;

            if(possiblePrimeNumber - 1 == divider) {
                resultedListOfPrimeNumbers.push(possiblePrimeNumber)
            }
        }
    }

    return resultedListOfPrimeNumbers
}


let result = determinePrimeNumbersInRange(11, 20) // <- Insert Here!

console.log(result);
