//Return all the palindromes in an array

let palindromes = (function(arr){
    result=[]
    for(let index in arr) {
        console.log(arr[index])

        var reversedString = arr[index].split("").reverse().join(""); 

        if(arr[index] === reversedString) {
            result.push(arr[index])
        }
    }

    return result
}) (["abc","maiam","eye"]);
console.log(palindromes)