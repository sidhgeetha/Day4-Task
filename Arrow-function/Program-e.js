//Return all the palindromes in an array

const palindrome = (arr) =>{
    result=[]
    for(let index in arr) {
        console.log(arr[index])

        var reversedString = arr[index].split("").reverse().join(""); 

        if(arr[index] === reversedString) {
            result.push(arr[index])
        }
    }

    return result


 
  };

 

  console.log(palindrome(["abc","maiam","eye"]))

 