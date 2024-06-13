let numbers = [1, 2, 3, 4, 5, 6];

//so the element for which our callback function returns true, numbers.find() will return that value as result
let result = numbers.find((element, index, array) => {
  return element > 4;
});
console.log(result);

// 'find' method takes first parameter a callback function
//does it have any second parameter? YES! and second parameter is 'this' keyword
