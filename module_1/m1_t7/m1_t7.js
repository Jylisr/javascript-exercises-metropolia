let dice = parseInt(prompt("Enter the amount of dice: "))
let i = 0
let sum = 0

while (i <= dice) {
    let num = Math.floor(Math.random()*5)
    console.log(num)
    sum += num + 1
    i++
}

document.querySelector('#text1').innerHTML = 'The sum of the dice is: ' + sum