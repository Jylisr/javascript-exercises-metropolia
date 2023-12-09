let ulElement = document.createElement("ul");

let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");

li1.textContent = "First item";
li2.textContent = "Second item";
li3.textContent = "Third item";
li2.classList.add("my-item");

ulElement.appendChild(li1);
ulElement.appendChild(li2);
ulElement.appendChild(li3);

var targetElement = document.getElementById("target");
targetElement.appendChild(ulElement);