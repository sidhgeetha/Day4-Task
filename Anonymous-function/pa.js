//Print odd numbers in an array

const odd_out = function (arr, value) {
    const result = [];
  for (let ind in arr) {
    if (arr[ind] % 2 !== value) {
     result.push(arr[ind])
    
    }
  }
  return result;
}

let result = odd_out([1, 2, 3, 4, 5, 6], 0);
console.log(result);
