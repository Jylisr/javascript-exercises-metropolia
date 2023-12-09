let numbers = [];

// Ask the user for numbers until they enter 0
while (true) {
  let userInput = prompt("Enter a number (enter 0 to stop):");
  let number = parseInt(userInput);

  if (number === 0) {
    break;
  }

  numbers.push(number);
}
numbers.sort((a, b) => b - a);
console.log("Sorted numbers (from largest to smallest):", numbers);