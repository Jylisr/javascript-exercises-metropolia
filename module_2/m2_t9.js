function even(numbersArray) {
  let evenArray = [];

  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 === 0) {
      evenArray.push(numbersArray[i]);
    }
  }

  return evenArray;
}

let numbersArray = [2, 7, 4, 9, 8];
let evenNumbersArray = even(numbersArray);

console.log("Original Array:", numbersArray);
console.log("Even Numbers Array:", evenNumbersArray);
