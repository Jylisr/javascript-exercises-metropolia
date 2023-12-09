let year = parseInt(prompt("Enter a year: "))

if (year % 4 === 0 && year % 400 === 0) {
    document.querySelector('#text1').innerHTML = `${year} is a leap year`
}
else if (year % 4 === 0) {
    document.querySelector('#text1').innerHTML = `${year} is a leap year`
}
else {
    document.querySelector('#text1').innerHTML = `${year} is not a leap year`
}