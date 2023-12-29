// //Return all the prime numbers in an array

const fn_prime =  (arr) => {
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
 
console.log(fn_prime([1,5,7,3]))

