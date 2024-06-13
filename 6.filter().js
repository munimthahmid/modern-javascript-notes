let numbers = [1, 2, 3, 4, 5, 10, 12, 34];

//should print all the odd numbers
//array.filter() filter's all the values that satisfies the callback function
let result = numbers.filter((element) => element % 2);
console.log(result);
