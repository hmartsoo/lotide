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

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  const middleNumber = [];

  if (array.length % 2 === 0) {
    middleNumber.push(array[(array.length / 2) - 1]);
    middleNumber.push(array[array.length / 2]);
    return middleNumber;
  }

  const index = Math.ceil(array.length / 2) - 1;
  middleNumber.push(array[index]);
  // console.log(index, middleNumber);
  return middleNumber;
};


// //Test for arrays with one or two elements
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => []
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => []
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => []
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => []