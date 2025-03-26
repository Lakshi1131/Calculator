class Addition {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    calculate() {
        return this.num1 + this.num2;
    }
}

import java.util.Scanner;

public class MultiplicationCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Prompt the user for the first number
        System.out.print("Enter first number: ");
        double num1 = scanner.nextDouble();
        
        // Prompt the user for the second number
        System.out.print("Enter second number: ");
        double num2 = scanner.nextDouble();
        
        // Perform multiplication
        double result = num1 * num2;
        
        // Display the result
        System.out.println("Result: " + result);
        
        scanner.close(); // Close the scanner
    }
}

class Subtraction {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    calculate() {
        return this.num1 - this.num2;
    }
}

const subtract = new Subtraction(10, 5);
console.log("Subtraction Result:", subtract.calculate()); // Output: 5

const add = new Addition(5, 10);
console.log("Addition Result:", add.calculate());

const multiply = new Multiplication(5, 10);
console.log("Multiplication Result:", multiply.calculate());
fgvdf
