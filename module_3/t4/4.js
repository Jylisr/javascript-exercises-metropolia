'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

let selectElement = document.getElementById("target");

for (let r i = 0; i < students.length; i++) {
  let optionElement = document.createElement("option");
  optionElement.value = students[i].value;
  optionElement.textContent = students[i].name;
  selectElement.appendChild(optionElement);
}
targetElement.appendChild(selectElement);
