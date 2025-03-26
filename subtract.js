class Subtraction {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    subtract() {
        return this.num1 - this.num2;
    }
}

// User input
const prompt = require("prompt-sync")()


const num1 = parseFloat(prompt("Enter first number:"));
const num2 = parseFloat(prompt("Enter second number:"));

const sub = new Subtraction(num1, num2);
console.log("Result:", sub.subtract());
