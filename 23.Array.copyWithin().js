//array.copywithin(target,start,end)
//start is default to 0
// end is default to array.length
// NEVER CHANGES ARRAY length
// So, our target is always one element , if start-end refers to multiple element always some element from the end of the array will get cut

let numbers = [1, 2, 3, 4, 5, 6];

numbers.copyWithin(1, 4, 5);

//Changes the original array
console.log(numbers);
