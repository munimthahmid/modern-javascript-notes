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

//Not only array, we can pass any iterable in the set ex. array,strings

mySet = new Set(myArray);

log(mySet);
