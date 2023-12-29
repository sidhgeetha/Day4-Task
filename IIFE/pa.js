//Print odd numbers in an array

let oddout = (function (arr, value) {
  const result = [];
  for (let ind in arr) {
    if (arr[ind] % 2 !== value) {
      result.push(arr[ind]);
    }
  }
  return result;
}) ([1, 2, 3, 4, 5, 6], 0);

console.log(oddout);





// let oddout=(function sum-fun(num,num1){

//console.log(num+ num1)
// return num + num1
//} ) (10,20);
//console.log(oddout);

