// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   } else {
//     for (const i in array1) {
//       if (array1[i] !== array2[i]) {
//         return false;
//       }
//     }
//     return true;
//   }
// };

// const assertArraysEqual = function(actual, expected) {
//   if (!eqArrays(actual, expected)) {
//     return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
//   return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
// };

const flatten = function(array) {
  let mergedArray = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      mergedArray = mergedArray.concat(element);
    } else {
      mergedArray.push(element);
    }
  }
  return mergedArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]