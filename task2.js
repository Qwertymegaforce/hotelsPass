function findIntersactionBetweenArrays(arrayOfIntArrays) {

    let resultedArrOfInt = []

    for(let number of arrayOfIntArrays[0])
    {
        for(let nextArr = 1; nextArr < arrayOfIntArrays.length; nextArr ++) {
            if (!arrayOfIntArrays[nextArr].includes(number)) break;
            else if (arrayOfIntArrays.length - 1 == nextArr) {
                resultedArrOfInt.push(number)
            }
        }
    }

    return resultedArrOfInt
}

function determineDividersForNumbers(arrayOfNumbers) {
    
    let errormsg = "Functions only accepts integers` array without items with decimal portion as argument"
    let resultedArrОfDividersArr = []

    let result = []
    
    for(number of arrayOfNumbers) {
        if (typeof number != "number" || number % 1 !== 0) throw new TypeError(errormsg)
        
        else if (number == 0) throw new Error("Number 0 found in arr")

        else if (number == 1) {
            result.push(number) 
            continue
        }
        
        let innerResultedArrOfDividers = []

        for (let divider = 2; divider <= number; divider++) {
            if (number % divider == 0) {
                if(!innerResultedArrOfDividers.includes(divider)) innerResultedArrOfDividers.push(divider)
            }
        }

        resultedArrОfDividersArr.push(innerResultedArrOfDividers)
    }

    let sortedResultedArrOfDividers = resultedArrОfDividersArr.sort((a,b) => a.length - b.length)
    result.push(...findIntersactionBetweenArrays(sortedResultedArrOfDividers))

    return result
}


let result = determineDividersForNumbers([42, 12, 18]) // <- Insert Here!

console.log(result);
