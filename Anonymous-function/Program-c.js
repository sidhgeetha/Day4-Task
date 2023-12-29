//Sum of all numbers in an array
const sumOf = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

let result = sumOf([1, 2, 3, 4, 5, 6]);
console.log(result);
