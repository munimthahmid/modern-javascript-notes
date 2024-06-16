//My vscode automatically suggest ./external, however we can write this way in react, But in raw JS we have to write ./external.js

//Also to enable export import we have to add a new file package.json and set the type to module, But in React we don't need to do this

//This type of import is known as named import
//we can also use alias here like import {pi as varPI, a as varA}
import { pi, a, myFunc } from "./external.js";

console.log(a);
console.log(pi);

//If we want to import the WHOLE FILE use * and give it a alias
import * as playground from "./external.js";

//when we import a default value don't need to use {}
import defaultValue from "./external.js";

console.log(playground.a);
console.log(playground.pi);
console.log(defaultValue);
