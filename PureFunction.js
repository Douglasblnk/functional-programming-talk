const array = [1, 2, 3];

// ========================IMPURE=============================
function addElementToArray(element) {
  array.push(element);
}

console.log('array :>> ', array);

addElementToArray(4)

console.log('array :>> ', array);






// ========================STILL IMPURE=============================
function addElementToArray(a, element) {
  a.push(element);
}

console.log('array :>> ', array);

addElementToArray(4)

console.log('array :>> ', array);





// ========================PURE=============================
function addElementToArray(a, element) {
  return [...a, element]
}

console.log('array :>> ', array);

console.log(addElementToArray(array, 4))

console.log('array :>> ', array);
