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

// TEST CODE
assertArraysEqual(["a", "b", "c"], [1, 2, 3]);