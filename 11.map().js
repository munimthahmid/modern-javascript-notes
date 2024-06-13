let numbers = [1, 2, 3, 4, 5];

//So if we wan't to iterate over each element and modify each element according to some condition, we use map().
//It is almost like forEach, except the fact that it gives us a new array. However as we have access to current array and the index value we can change the current array too inside map's callback function
let result = numbers.map((element, index, array) => {
  //   array[index] *= 3;
  return element + index;
});
console.log(numbers);
console.log(result);
