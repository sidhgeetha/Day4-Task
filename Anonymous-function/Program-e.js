//Return all the palindromes in an array

const pfn = function(arr) {
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

  var result = pfn(["abc","maiam","eye"])

  console.log(result)

  var result = pfn(["121","111","213"])

  console.log(result)