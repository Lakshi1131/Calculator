class Addition {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    calculate() {
        return this.num1 + this.num2;
    }
}
class Multiplication {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    calculate() {
        return this.num1 * this.num2;
    }
}
const add = new Addition(5, 10);
console.log("Addition Result:", add.calculate());

const multiply = new Multiplication(5, 10);
console.log("Multiplication Result:", multiply.calculate());
