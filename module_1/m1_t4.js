let Gryffindor = 1
let Slytherin = 2
let Hufflepuff = 3
let Ravenclaw = 4
let num = Math.floor(Math.random() * 5)
let name = prompt("Enter your name: ")

switch (num) {
    case Gryffindor:
         document.querySelector('#text1').innerHTML = `Congratulations ${name}, you are in Gryffindor.`
        break
    case Slytherin:
        document.querySelector('#text1').innerHTML = `Congratulations ${name}, you are in Slytherin.`
        break
    case Hufflepuff:
        document.querySelector('#text1').innerHTML = `Congratulations ${name}, you are in Hufflepuff.`
        break
    case Ravenclaw:
        document.querySelector('#text1').innerHTML = `Congratulations ${name}, you are in Ravenclaw.`
        break
}