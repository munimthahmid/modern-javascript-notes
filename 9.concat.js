let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
let numbers3 = [10, 11, 12];
let numbers4 = [20, 30, 40];

//array.concat() does not changes the main arrays. we can concat multiple arrays using concat() method
let result = numbers1.concat(numbers2);
let result2 = numbers1.concat(numbers2, numbers3, numbers4);
console.log(result);
console.log(result2);
