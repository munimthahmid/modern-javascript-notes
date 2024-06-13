let numbers = [1, 2, 3, 4, 5, 6];

//numbers.slice(start,end) returns all the values from numbers[start] to numbers[end-1]
//numbers.slice() does not chnages the main array

let result = numbers.slice(); //1,2,3,4,5,6
result = numbers.slice(1, 3); //2,3
console.log(result);
result = numbers.slice(-3, -1); //4,5
console.log(result);
