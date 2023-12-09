
function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function dice() {
  let sides = parseInt(prompt("Enter the number of sides on the dice:"));

  if (isNaN(sides) || sides <= 0) {
    alert("Invalid input. Please enter a valid number of sides.");
    return;
  }

  let rolls = [];
  let result;

  do {
    result = rollDice(sides);
    rolls.push(result);
  } while (result !== sides);

  document.write('<ul>');
  rolls.forEach(roll => {
    document.write('<li>' + roll + '</li>');
  });
  document.write('</ul>');
}
dice();
