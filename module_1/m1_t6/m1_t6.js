let num = prompt("Enter a number: ")
let answer = confirm("Should I calculate the square root?")

if (answer === true) {
    if (num >= 0) {
        document.querySelector('#text1').innerHTML = 'The square root of' + num.toString() + 'is' + Math.sqrt(num).toString()
    }
    else if (num < 0) {
        document.querySelector('#text1').innerHTML = 'Invalid number'
    }
}
else if (answer === false) {
    document.querySelector('#text1').innerHTML = 'Ok, square root will not be calculated'
}