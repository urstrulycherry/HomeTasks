function basicOp(operation, value1, value2) {
    if (operation == '+')
        return value1 + value2
    else if (operation == '-')
        return value1 - value2
    else if (operation == '*')
        return value1 * value2
    else
        return value1 / value2
}

console.log(basicOp('+', 4, 7))
console.log(basicOp('-', 15, 18))

// Link: https://www.codewars.com/kata/basic-mathematical-operations/train/javascript