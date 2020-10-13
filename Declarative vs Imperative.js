
// ================Imperative===================
// HOW
const imperativeResult = [];
let i = 0;

for (i; i < myArray.length; i++) {
  if (myArray[i] > 4) {
    imperativeResult.push(myArray[i] + 10);
  }
}

console.log('Imperative result => ', imperativeResult);

// ================Declarative===================
// WHAT
const myArray = [1, 2, 3, 4, 5, 6, 7];
const declarativeResult = myArray
  .filter(num => num > 4)
  .map(value => value + 10);

console.log('Declarative result => ', declarativeResult);