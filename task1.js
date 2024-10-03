function declineWordComputer(number) {
    
    let errormsg = "Functions only accepts integers without decimal portion as argument"
    if (typeof number != "number" || number % 1 !== 0) throw new TypeError(errormsg)

    let stringifiedNumber = String(number)
    let lastDigitOfStringifiedNumberStr = stringifiedNumber.substring(stringifiedNumber.length - 1)
    let lastDigitOfStringifiedNumberInt = Number(lastDigitOfStringifiedNumberStr)
    
    let suffix = ''

    if (lastDigitOfStringifiedNumberInt > 1 && lastDigitOfStringifiedNumberInt < 5) {
        suffix = "а"
    }
    else if (lastDigitOfStringifiedNumberInt > 4 || lastDigitOfStringifiedNumberInt == 0) {
        suffix = "ов"
    }

    return `${number} компьютер${suffix}`
}

let result = declineWordComputer(42) // <- Insert Here!

console.log(result);
