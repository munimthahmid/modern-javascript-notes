//format array.foreach(callback());

let numbers = [1, 2, 3, 4, 5];

function double(element, index, array) {
  array[index] = element * 2;
}
let square = (element, index, array) => (array[index] = Math.pow(element, 2));

let display = (element) => console.log(element);
// numbers.forEach(square);
// numbers.forEach(display);

let fruits = ["orange", "apple", "mango", "banana"];

fruits.forEach(display);
let upper = (element, index, array) => {
  array[index] = element.toUpperCase();
};
let capitalize = (element, index, array) => {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
};
fruits.forEach(capitalize);
fruits.forEach(display);
