let startButton = document.getElementById("start");

startButton.addEventListener("click", function() {
  let userInput = document.getElementById("calculation").value;

  if (userInput.includes("+") || userInput.includes("-") || userInput.includes("*") || userInput.includes("/")) {
    let [num1, operator, num2] = userInput.split(/\s*([\+\-\*\/])\s*/);

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let result;
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
        result = num2 !== 0 ? Math.floor(num1 / num2) : "Cannot divide by zero";
        break;
      default:
        result = "Invalid operator";
    }

    let resultElement = document.getElementById("result");
    resultElement.textContent = "Result: " + result;
  } else {
    let resultElement = document.getElementById("result");
    resultElement.textContent = "Invalid input. Please use one of the operators: +, -, *, /";
  }
});