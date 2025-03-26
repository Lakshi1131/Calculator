function multiplyNumbers() {
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    
    if (!isNaN(num1) && !isNaN(num2)) {
        alert("Result: " + (num1 * num2));
    } else {
        alert("Please enter valid numbers.");
    }
}

multiplyNumbers();
