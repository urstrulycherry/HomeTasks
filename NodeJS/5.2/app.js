const choices = {
    add: "addition",
    subtract: "subtraction",
    product: "multiply",
    divide: "division",
};

function calculate(operation, data) {
    switch (operation) {
        case choices.add:
            addition(data);
            break;
        case choices.product:
            multiplication(data);
            break;
        case choices.subtract:
            subtraction(data);
            break;
        case choices.divide:
            division(data);
            break;
        default:
            console.log("Invalid operation");
    }
}

function addition(data) {
    if (!checkValid(data, data.length))
        return;
    console.log(data.join(" + "), " = ", data.reduce((acc, curr) => acc + curr));
}

function subtraction(data) {
    if (!checkValid(data, 2))
        return;
    console.log(data.join(" - "), " = ", data.reduce((acc, curr) => acc - curr));
}

function multiplication(data) {
    if (!checkValid(data, data.length))
        return;
    console.log(data.join(" * "), " = ", data.reduce((acc, curr) => acc * curr));
}

function division(data) {
    if (!checkValid(data, 2))
        return;
    if (data[1] === 0) {
        console.log("Cannot divide by 0");
        return;
    }
    console.log(data.join(" / "), " = ", data.reduce((acc, curr) => acc / curr));
}

function checkValid(data, size, min = 2) {
    if (data.length !== size) {
        console.log(`Invalid data. Expected ${size} numbers`);
        return false;
    }
    if (data.length < min) {
        console.log(`Invalid data. Expected at least ${min} numbers`);
        return false;
    }
    if (data.some(isNaN)) {
        console.log("Invalid data. Expected numbers");
        return false;
    }
    return true;
}

const input = process.argv.slice(3); //Removes first three params
const operation = input[0]; //Gets operation
const data = input.slice(1).map(Number); //Gets data 
calculate(operation, data);