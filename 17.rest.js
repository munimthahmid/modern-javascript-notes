//when we use ... in the function it is called rest operator. And it should always be the last parameter of the function
function printValues(a, ...parameters) {
  console.log(a);
  console.log(parameters);
}

printValues(1, 2, 3, 4, 5, 6);
//Output: 1
// [2,3,4,5,6]
