// - 2
const num1Input = document.getElementById("num1")
const num2Input = document.getElementById("num2")
const addButton = document.getElementById("add")
const subtractButton = document.getElementById("subtract")
const multiplyButton = document.getElementById("multiply")
const divideButton = document.getElementById("divide");
const resultDisplay = document.getElementById("result")

function calculate(operator) {
    const num1 = parseFloat(num1Input.value)
    const num2 = parseFloat(num2Input.value);
    let result
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = "ERROR"
    }
    resultDisplay.textContent = `result: ${result}`;
}
addButton.onclick = () => calculate("+")
subtractButton.onclick = () => calculate("-")
multiplyButton.onclick = () => calculate("*")
divideButton.onclick = () => calculate("/")


