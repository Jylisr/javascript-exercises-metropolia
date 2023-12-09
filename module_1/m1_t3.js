let num1 = parseInt(prompt("Enter the first integer: "))
let num2 = parseInt(prompt("Enter the second integer: "))
let num3 = parseInt(prompt("Enter the third integer: "))

let sum = num1 + num2 + num3
let product = num1 * num2 * num3
let average = (num1 + num2 + num3)/3

document.querySelector('#text1').innerHTML = `Sum: ${sum},  Product: ${product},  Average: ${average}`