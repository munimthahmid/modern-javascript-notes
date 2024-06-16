let largest_Integer = Number.MAX_SAFE_INTEGER;

console.log(largest_Integer);
//Now If we want to work with integer which is greater than the largest safe one, like more than (2^53-1) then we use BigInt

//Also if we append n with any number than means that will become a BigInt

// first make the current number BigInt
let biggerInt = BigInt(largest_Integer);

//operation between two bigInt, opeation won't work without the 'n' appended at the end of number
biggerInt = biggerInt * 2n;
console.log(biggerInt);
