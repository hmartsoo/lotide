// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

//Create a function called tail
const tail = function(array) {
//Within the tail function, return everything EXCEPT the first item in the array
  const end = [];
  for (let n = 1; n < array.length; n++) {
    //declare the item that the loop is accessing
    end.push(array[n]);
  }
  //The tail function should not modify the original array. It should return a new array.
  console.log(end);
  return end;
};

//An array with only one element should yield an empty array for its tail
// An empty array should yield an empty array for its tail

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!