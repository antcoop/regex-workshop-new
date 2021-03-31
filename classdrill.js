// Write a function that takes in a string and returns true if it’s a pangram or false otherwise.
// Pangram: a sentence that contains every letter in the alphabet.
// Ex:
// Input: “Watch Jeopardy, Alex Trebek’s fun TV quiz game”
// Output: true
// Input: “Five hexing wizard bots jump quickly” 
// Output: true
// Input: “JavaScript is the best”
// Output: false

var isPangram = function (str) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var sentence = str.toLowerCase();
  for (var character of alphabet) {
    if (!sentence.includes(character)) {
      return false;
    }
  }
  return true;
}

console.log(isPangram("Watch Jeopardy, Alex Trebek’s fun TV quiz game"));
console.log(isPangram("Five hexing wizard bots jump quickly"));
console.log(isPangram("JavaScript is the best"));