//We said earlier that find method takes second parameter which is this. Almost all method of array has same feature. But what this this actually does? Let's see an example!

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //so as it seems that we don't use function keyword in the methods of a class, which kinda make sense
  test() {
    console.log("hello");
  }

  //So, if we don't pass 'this' in this method's parameter in that case 'window' will work as 'this' and as a result error will occur. However another way of avoiding this issue is to use arrow function instead of regular function as we know arrow function does not change the reference of 'this' keyword!. In that case we won't need the second parameter.
  exampleFunction() {
    let numbers = [1, 2, 3];
    numbers.find(function () {
      this.test();
    }, this);
  }
}

let shakib = new Student();
shakib.exampleFunction();
