//Print odd numbers in an array




const oddout = (arr) => {
    const result = [];
    for (let ind in arr) {
        if (arr[ind] % 2 !== 0) {
            result.push(arr[ind]);
        }
    }
    return result;
};

console.log(oddout([1,2,3,4,5,6]))