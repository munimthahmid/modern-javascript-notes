//Weakset can be initialized only by array of OBJECTS
let weakSet = new WeakSet([{ a: 1 }, { b: 2 }]);

//We can't add any other type of value other than object in weakSet
weakSet.add({ x: 2 });

//Usage
//Normally weakSet is not widely used in JS
//however it can be used to enhance JS OOP features. JS classes are just syntax but actually internally they don't follow OOP measures!

class Sample {
  constructor() {}

  sampleMethod() {
    return "You need a object of class to acess me , or do you?";
  }
}

//See this!! OOP of JS seems like an absolute joke. Accessing class method directly
//Need to learn prototype to understand this behaviour better
console.log(Sample.prototype.sampleMethod());

//Using weakSet we can somewhat avoid this.

let ws = new WeakSet();

class BetterSample {
  constructor() {
    //Whenever an object is created we are adding that into weak set
    ws.add(this);
  }

  sampleMethod() {
    if (!ws.has(this)) {
      throw new Error("You can't acess method directly!");
    }
    return "Now you must need a object";
  }
}

console.log(BetterSample.prototype.sampleMethod()); //throws error
