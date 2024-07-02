document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    let displayValue = "";
    let firstOperand = null;
    let secondOperand = null;
    let operator = null;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.id;

            if (value === "clear") {
                displayValue = "";
                firstOperand = null;
                secondOperand = null;
                operator = null;
            } else if (value === "equals") {
                if (firstOperand !== null && operator !== null && displayValue !== "") {
                    secondOperand = parseFloat(displayValue);
                    displayValue = calculate(firstOperand, secondOperand, operator).toString();
                    firstOperand = null;
                    secondOperand = null;
                    operator = null;
                }
            } else if (value === "add" || value === "subtract" || value === "multiply" || value === "divide") {
                if (firstOperand === null) {
                    firstOperand = parseFloat(displayValue);
                } else if (operator !== null) {
                    secondOperand = parseFloat(displayValue);
                    firstOperand = calculate(firstOperand, secondOperand, operator);
                }
                operator = value;
                displayValue = "";
            } else {
                displayValue += value;
            }

            display.textContent = displayValue;
        });
    });

    function calculate(first, second, operator) {
        switch (operator) {
            case "add":
                return first + second;
            case "subtract":
                return first - second;
            case "multiply":
                return first * second;
            case "divide":
                return first / second;
            default:
                return second;
        }
    }
});
