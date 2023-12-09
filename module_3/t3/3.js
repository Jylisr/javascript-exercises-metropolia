'use strict';
const names = ['John', 'Paul', 'Jones'];

let targetElement = document.getElementById("target");
let ulElement = document.createElement("ul");

for (let i = 0; i < names.length; i++) {
  let liElement = document.createElement("li");
  liElement.textContent = names[i];
  ulElement.appendChild(liElement);
}

targetElement.innerHTML = ulElement.outerHTML;