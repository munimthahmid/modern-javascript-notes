// let number=()=>
//     {
//         return 10;
//     }

//If arrow function has only one line
// let number=()=> console.log(10);

// If arrow function has only one line and that line is a return statement
//In this case we CAN'T WRITE RETURN, IT WILL GIVE ERROR
// let number=()=>10;

//If our function has parameter simply pass the parameter within (), if there is only one bracket in that case you can also omit the bracket, however it is not recommended.
// let number = (a, b) => a + b;

// console.log(number());

// কিন্তু শুধুই কি সিন্ট্যাক্স সহজ করার জন্য এই Fat Arrow ফাংশনের আবির্ভাব?
// না , না , না

//If we pass a normal function inside forEach, then the reference of 'this' keyword changes,so always pass a callback function so that reference of this keyword does not changes. Example:
let javascript = {
  name: "javascript",
  libraries: ["React", "Angular", "Vue"],
  printLibrary: function () {
    this.libraries.forEach((element) =>
      console.log(`${this.name} loves ${element}`)
    );
  },
};

javascript.printLibrary();

//Fat arrow for new

//We know, in JS every function works as a constructor function, Example:

function Person(name) {
  this.name = name;
}
let shakib = new Person("Shakib");
console.log(shakib);
console.log(shakib.name);

//But if we use arrow function instead of normal function then the constructor behaviour get destroyed. So ARROW FUNCTION DOES NOT WORKS AS CONSTRUCTOR FUNCTION ANYMORE.
// let Person2 = name;
// {
//   this.name = name;
// }
// let rafique=new Person2("Rafique") //this will give error
