let myObj = {
  name: "Munim",
  age: 22,
  country: "Bangladesh",
  findJob: (age) => {
    if (age == 23) return true;
    else return false;
  },
  uni: "BUET",
  subj: "CSE",
};

//get all the keys of Object using Object.keys()
let keys = Object.keys(myObj);

console.log(keys);

//get all the values of Object using Object.values()
let values = Object.values(myObj);

//get all the entries in an array using entries
let entries = Object.entries(myObj);

console.log(entries);

let x = 10;
let y = 20;
let z = x * 3 + y;

//if in a entry of a object name of key and value are same , then we can omit writing the value , for example instead of writing x:x,y:y we can simply write x,y

let elementObj = {
  name: "variables",
  x,
  y,
  z,
};

console.log(elementObj);

//values[3]=function
console.log(values[3](23));

//entries[3][1]=function
console.log(entries[3][1](23));
