//Return all the prime numbers in an array

let findprime  = (function(arr){
    const result = [];
    for(let i in arr) {
        let isprime = true
        for(let x=2; x < arr[i]; x++) {
            if (arr[i] % x === 0) {
                isprime = false
                break;
            }   
        }
        if(isprime) {
            result.push(arr[i]);
        }
        
    }

    return result;
}) ([1,5,7,3])

console.log(findprime);