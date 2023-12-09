let startButton = document.getElementById("start");

startButton.addEventListener("click", function() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operation = document.getElementById("operation").value;

  let result;
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "sub":
      result = num1 - num2;
      break;
    case "multi":
      result = num1 * num2;
      break;
    case "div":
      result = num1 / num2;
      break;
    default:
      result = "Invalid operation";
  }

  let resultElement = document.getElementById("result");
  resultElement.textContent = "Result: " + result;
});