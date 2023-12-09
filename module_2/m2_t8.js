function concat(stringsArray) {
  let result = "";
  for (let i = 0; i < stringsArray.length; i++) {
    result += stringsArray[i];
  }
  return result;
}
let namesArray = ["Johnny", "DeeDee", "Joey", "Marky"];
let concatenatedString = concat(namesArray);
document.write("<p>Concatenated String: " + concatenatedString + "</p>");
