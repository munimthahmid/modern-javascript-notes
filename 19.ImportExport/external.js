//Write export keyword before the variables that we wan't to allow other files to import
export const pi = 3.1416;
export let a = 2999;

//in default export after default keyword you can't define or declare the variable
let b = 5;
export default b;

export function myFunc() {
  console.log("I am my func!");
}
