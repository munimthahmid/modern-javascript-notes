//for loop
for (let i = 0; i < 5; i++) {
  //   console.log(i);
}

//for in loop

//it is used to iterate in a object

let myObject = {
  name: "Munim",
  age: 22,
  country: "Bangladesh",
};

for (element in myObject) {
  console.log(myObject[element]);
}

//for of loop
//It is used to iterate element of array/string.
let numbers = [4, 3, 1, 6, 4, 2];
for (element of numbers) {
  console.log(element);
}

//difference between for of and for in is for of gives us element and for in gives us index
