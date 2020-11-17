// Write a function that takes an array of integers as an input and outputs the first duplicate.

// Ex:
// Input: [ 2, 5, 6, 3, 5 ]
// Output: 5
// Input: [ 1, 3, 4, 1, 3, 4 ]
// Output: 1
// Input: [ 2, 4, 5 ]
// Output: undefined

var firstDuplicate = function(array) {
  var arrayLength = array.length;
  for (var i = 0; i < arrayLength; i++) {
    for (var j = 0; j < i; j++) {
      if (array[i] === array[j]) {
        return array[i];
      }
    }
  }
  return null;
}

console.log(firstDuplicate([ 2, 5, 6, 3, 5 ]));
console.log(firstDuplicate([ 1, 3, 4, 1, 3, 4 ]));
console.log(firstDuplicate([ 2, 4, 5 ]));
console.log("made it here")