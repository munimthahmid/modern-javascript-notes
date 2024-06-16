//Object Destructuring

//We use destructuring when we want to retrieve a value from the object and assign it to a variable

let myObj = {
  name: "Shakib",
  age: 22,
  country: "BD",
};

//What it does is finds the property called name, retrives its value, and assign that value to variable called name
let { name } = myObj;

//If we assign to other variable we can do it using aliasing

let { name: title } = myObj;

console.log(name);
console.log(title);

title = title + " hello!"; //We didn't even defined title with let or var! But still working because JS internally defined this for us

console.log(title);

//Destructuring Nested Object

let nestedObj = {
  name: "Shakib",
  age: 22,
  country: "BD",
  education: {
    degree: "honors",
  },
};

let {
  education: { degree },
} = nestedObj;
console.log(degree);

//However if the education object didn't exist , then this code will crash, so we have to use a default value for the education object in case it does not exist

let { education: { degree: x } = {} } = nestedObj;
console.log(x);

//Array Destructuring

let numbers = [1, 2, 3, 4, 5];
let [a, b] = numbers; //a=1,b=2

let [, c, , , d] = numbers; //c=2,d=5;

console.log(a, b, c, d);

let nestedNumbers = [1, 2, 3, 4, [5, 6, 7], 8, 9];

let [, , , , [e, , f]] = nestedNumbers;

console.log(e, f); //e=5 f=7

//Value Swapping using Destructuring

[b, a] = [a, b]; // it swaps the values of a and b
