// //Return all the prime numbers in an array

const fn_prime = function (arr) {
    const result = [];

    for(let i in arr) {
        isprime = true
        for(let x=2; x < arr[i]; x++) {
            if (arr[i] % x === 0) {
                isprime = false
                break;
            }   
        }
        if(isprime) {
            result.push(arr[i])
        }
        
    }

    return result
};
 
  
result = fn_prime([1,5,7,3]);

console.log(result)

















  
    // for(let i = 0; i < arr.length; i++) {
    //   if (arr[i] === 2) {
    //     result.push(arr[i]);
    //   } else if (arr[i] > 2) {
    //     let flag = false;
    //     for (let x = 2; x < arr[i]; x++) {
    //         console.log(arr[i])
    //       if (arr[i] % x === 0) {
    //         flag = true;
    //         break;
    //       }
    //     }
    //     if (!flag) {
    //       result.push(arr[i]);
    //     }
    //   }
    // }
  
 






  ///------------------------------------------

// const isPrime = function (arr) {
//     const result = [];

//  //num = 1,2,3,4,5
// // div =2,3,4,5

// for(let num = 0 ; num <=arr.length; num++){
//     for (div =2;div<=arr[num];div++){
//         if(arr[num] % div === 0)
//         result.push(arr[num])
//     }
// }
// return result;

// }
// let result = isPrime([1, 2, 3, 4, 5]);
// console.log(result);

