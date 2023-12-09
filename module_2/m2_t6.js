
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function dice() {
  let rolls = [];
  let result;

  do {
    result = rollDice();
    rolls.push(result);
  } while (result !== 6);

  document.write('<ul>');
  rolls.forEach(roll => {
    document.write('<li>' + roll + '</li>');
  });
  document.write('</ul>');
}

dice();