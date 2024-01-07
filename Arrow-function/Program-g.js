//Remove duplicates from an array

const findDuplicate = (arr)=>{
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



// for(let val in arr){
//     if(arr.indexOf(value)==arr.lastIndexOf(vaue)){
//         result.push(value)
//     }
// }
// return result;


// const findDuplicate = (arr) => {
//     let result =[]

//     for(let value in arr){
//     if(result.indexOf(value)==-1){
//         result.push(value)
//     }

//     }
//     return result
// };
// let ans = findDuplicate([1,2,4,5,6,4,3,3,4]);
// console.log(ans);