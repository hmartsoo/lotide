const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (const i in array1) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

//Implement without function which will return a subset of a given array, removing unwanted elements.

const without = function(source, itemsToRemove) {
  const result = [];
  for (const element of source) {
    //!itemsToRemove.includes() means that if the element does NOT exist inside itemsToRemove
    if (!itemsToRemove.includes(element)) {
      //If the above is true, push the element inside the new result array
      result.push(element);
    }
  }
  return result;
};

//WRITE GOOD TEST CODE FIRST BEFORE YOU CREATE FUNCTION (test-driven development aka TDD)
assertArraysEqual(without([1, 2, 3], [2, 1]), [3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(without(words, ["hello", "world", "lighthouse"]),[]);