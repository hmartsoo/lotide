const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

const countLetters = (string) => {
  const totalLetters = {};
  for (const letter of string) {
    
    //we do not access our empty object here because we do not want it to be included in our default truthy statement
    if (letter !== " ") {

      //inside totalLetters, does letter exist?
      if (totalLetters[letter]) {
        totalLetters[letter] += 1;
      } else {
        totalLetters[letter] = 1;
      }
    }
  }
  return totalLetters;
};

console.log(countLetters("Light House Labs"));