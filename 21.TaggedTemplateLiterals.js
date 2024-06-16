//Tagged template literals is basically a function. whenever we write the function name before the template literal the function get called with two parameter, one is the whole string and other is the list of values. and we can do anything with it. In this case we used reduce method, and modified the string

function modifier(strings, ...values) {
  //as our string is like this string.. + value +string..+value+string.. So initially previous is "" and current is a string(We have) and then we have a value(player1). so we return previous+current+ Mr. +player1, and it becomes the previous for next iteration and the current in next iteration becomes 'and'. It goes on like this
  let modifiedString = strings.reduce((previous, current) => {
    console.log("Previous: " + previous);
    console.log("Current:" + current);
    return previous + current + (values.length ? "Mr. " + values.shift() : "");
  }, "");

  return modifiedString;
}

player1 = "Shakib";
player2 = "Tamim";
player3 = "Tawhid";
player4 = "Mahmudullah";

s = modifier`We have ${player1} and ${player2} in our Team. We also have ${player3}. Don't forget about ${player4}`;
console.log(s);
