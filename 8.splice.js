let numbers = [1, 2, 3, 4, 5, 6];

//numbers.splice(startIndex,noOfElement,newElements) takes 3 parameter,
//1. startIndex -> From what index we will do slice and add
//2. noOfElement -> How many element to remove , starting from startIndex
//3. newElements -> The elements that we will add in the array at the positions starting from startIndex

//result returns the list of values that we have removed
//SPLICE METHOD CHANGES THE ORIGINAL ARRAY

let result = numbers.splice(1, 2, 10, 11, 12, 13);

console.log(numbers);
console.log(result);

//What will happen if there is not enough element to remove as specified? In that case it will remove as much as it can, but WON'T SHOW ANY ERROR
result = numbers.splice(-1, 2, 10, 11, 12, 13);

console.log(numbers);
