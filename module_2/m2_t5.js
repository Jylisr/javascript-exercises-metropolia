let numbers = new Set();

while (true) {
  let userInput = prompt("Enter a number (enter a number twice to stop):");

  let number = parseFloat(userInput);


  if (numbers.has(number)) {
    alert("You've already entered this number. Stopping operation.");
    break;
  }

  numbers.add(number);
}

let sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
console.log("Sorted unique numbers (in ascending order):", sortedNumbers);
