function formCell(cellLength, number){
    let lengthOfNumber = String(number).length
    let resultedSpacesString = new Array(cellLength + 1 - lengthOfNumber).join(' ')

    if (number != 0) {
        let resultedStringWithNumber = resultedSpacesString + `${number} `  
        return resultedStringWithNumber
    } 

    else resultedSpacesString += "  "

    return resultedSpacesString
}


function formColumnStracture (currentColumn, rangeValue) {

    let singularCellLength = String(rangeValue**2).length
    let columnStructureArr = [formCell(singularCellLength, currentColumn), ]
    let firstColumnException = currentColumn == 0? 1 : 0

    for(let multiplier = 1; multiplier <= rangeValue; multiplier ++) {
        columnStructureArr.push(formCell(singularCellLength, multiplier * (currentColumn + firstColumnException)))
    }
    
    return columnStructureArr
}

function formColumnDisplay(columnsArr){

    let resultedString = ""

    for(let symbol = 0; symbol < columnsArr.length; symbol ++) {

        for(column of columnsArr) {
            resultedString += column[symbol]
        }

        resultedString += '\n'
    }

    return resultedString
}

function logMultTableUpToRange(rangeValue) {

    let errormsg = "Functions only accepts integers without decimal portion as argument"
    if (typeof rangeValue != "number" || rangeValue % 1 !== 0) throw new TypeError(errormsg)

    let columnsArr = []
    
    for(let column = 0; column <= rangeValue; column ++) {
        columnsArr.push(formColumnStracture(column, rangeValue))
    }
    
    let result = formColumnDisplay(columnsArr)

    return result
}

let result = logMultTableUpToRange(5) // <- Insert Here!

console.log(result);
