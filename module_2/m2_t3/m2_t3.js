let dogNames = [];
let i = 0;

while (i < 6) {
    const name = prompt("Enter the name of the dog: ");
    dogNames.push(name);
    i++;
}

dogNames.sort();
dogNames.reverse();

for (i of dogNames) {
    document.getElementById("list").innerHTML += `<li>${i}</li>`;
}