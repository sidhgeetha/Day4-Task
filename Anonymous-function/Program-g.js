//Remove duplicates from an array

const findDuplicate = (arr){
    const result=[];
    for(ind in arr){
        if(ind == arr.indexOf(arr[ind])){
            result.push(arr[ind])
        }
    }
    return result
}

let result = findDuplicate([1,2,4,5,6,4,3,3,4]);
console.log(result);













