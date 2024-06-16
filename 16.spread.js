//Array Spreading

let numbers = [1, 2, 3];

//Here we want the numbers array to be included in newNumbers, so we have to manually insert each value, Which is very bad way of writing code!
let newnumbers = [numbers[0], numbers[1], numbers[2], 4, 5, 6];

//A much better way is spreading! When written like ...numbers, all the element of numbers are spreaded into newNumbers
let newNumbers2 = [...numbers, 4, 5, 6];

//Spreading in Copying Array

//We know array is reference type. So if we have a array numbers, if we assign newArray=numbers, this newArray basically points to numbers array. So, whenever we change the numbers array the newArray got changed! This can be stopped by copying array using spreading!

let newArray = numbers;
numbers.push(4);

console.log(newArray); //Output: 1,2,3,4
numbers.pop();
let spreadedNewArray = [...numbers];
console.log(spreadedNewArray); //Output: 1,2,3

//Array concatanation Using Spreading

let array1 = [1, 2, 3];
let array2 = [4, 5, , 6];
let concArray = [...array1, ...array2];

//Spreading Objects

let myObj = {
  name: "Munim",
  age: 22,
  country: "BD",
};
let inst = {
  Instname: "BUET",
  place: "Dhaka",
  type: "Engineering",
};

let newObj = { ...myObj, ...inst };
console.log(newObj);
