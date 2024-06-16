let numbers = [1, 2, 3, 4, 5, 6, 7];

//reduce's callback function takes 4 parameter in total, You can also use only previousValue,currentValue. reduce method takes 2 value, one is a callback function, another is INITIAL VALUE OF previousValue. This method basically reduces the whole array into one element only.

//So here, we has to pass 0 as 2nd parameter , otherwise initially previousValue will be undefined.
let result = numbers.reduce(
  (previousValue, currentValue, currentIndex, array) => {
    return previousValue * 2 + currentValue;
  },
  0
);

console.log(result);
