function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

let userInput = prompt("Enter an integer:");
let number = parseInt(userInput);

let isPrimeResult = isPrime(number);

document.write("<p>");
document.write(number + " is " + (isPrimeResult ? "a prime" : "not a prime") + " number.");
document.write("</p>");

