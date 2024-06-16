const language = {
  name: "Javascript",
  creator: "Brenden Eich",
  library: {
    react: {
      company: "Facebook",
    },
  },
};

//

//this is without check , but if we want to check at each level it will be a nasty code, now that is where comes ES11's new feature OPTIONAL CHAINING, just puut a ? after each object you want to check and JS will check that itself internally, and so no error will be thrown
let companyName = language.library.react.company;

let comanyNameWithErrorChecked = language?.library?.react?.company;
console.log(companyName);
console.log(comanyNameWithErrorChecked);

//Same thing we can do for array

let array = null;

console.log(array?.[2]);
