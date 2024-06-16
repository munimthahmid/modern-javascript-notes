//here 10 is the default value of the parameter 'value'
function printValue(value = 10) {
  console.log(value);
}

printValue(5); // Output: 5
printValue(undefined); //Output:10
printValue(); //Output:10
//Passing no value and passing undefined are same as undefined itself means nothing! However , if we pass null then null will be printed as in JS null is a defined value.
printValue(null); //Output: null
