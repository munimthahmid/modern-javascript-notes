let numbers = [1, 2, 3, 4, 5, 6, 7];

let result = numbers.findIndex((element, index, array) => {
  return element > 6;
});
console.log(result);

//if no such element found that satisfy the callback function it returns -1
let result2 = numbers.findIndex((element, index, array) => {
  return element > 7;
});
console.log(result2);

//Just like array.find() we can use 'this' keyword as second parameter in array.findIndex()
