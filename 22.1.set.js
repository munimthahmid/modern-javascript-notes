function log(anything) {
  console.log(anything);
}

//Basic Set Operations

mySet = new Set();

mySet.add(1).add(2).add("Bangladesh");
mySet.delete(2);

mySet.has(2); //returns false

mySet.clear();
log(mySet);

//Convert Array to Set
let myArray = [1, 2, 3, 4, 5, 1, 2];

//Not only array, we can pass any iterable in the set ex. array,strings,maps

mySet = new Set(myArray);

let myString = "Hey this is a string!";

//SET IS A UNORDERED COLLECTION OF UNIQUE ELEMENTS. Unlike C/C++ set in JS does not stores values in sorted manne.
mySet = new Set(myString);

//Convert Set to Array

//Using spread operators
let newArray = [...mySet];

//Using built in method

let newArray2 = Array.from(mySet);

log(newArray);
log(newArray2);

//adding object in set
//In this case both object will be added to set. Why! Because object is reference type! So as a result even though the content of these two object is identical , these two object's reference is different that means the objects are different. So they will be considered UNIQUE in set.
mySet.add({
  x: 5,
});
mySet.add({
  x: 5,
});

let obj = {
  x: 5,
};

//But in this case only one time will be added. You know why.
mySet.add(obj);
mySet.add(obj);

//Finding Unique Elements of Set in One Line!

myArray = [1, 2, 3, 4, 1, 2, 1, 5];

uniqueElementArray = [...new Set(myArray)];

log(uniqueElementArray);

//Union of Set

let a = new Set([1, 2, 3, 4]);
let b = new Set([2, 3, 5]);

//a U b
let union = new Set([...a, ...b]);

// for each element of a check if b also contains the element, If contains then
// put that in the intersection set
let intersection = new Set(
  [...a].filter((element) => {
    return b.has(element);
  })
);

// a-b. for each element of a check if b also contains the element, if does not contains
//then put that element in difference
let difference = new Set(
  [...a].filter((element) => {
    return !b.has(element);
  })
);

log(union);
log(intersection);
log(difference);

//Set is iterable,So we can use for loops ex. for, for in, for of in set
