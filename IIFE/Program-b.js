//Convert all the strings to title caps in a string array

let checkName = (function (string) {
    const result = [];
    string = string.toLowerCase().split('');
    console.log(string);
    for (let i = 0; i < 1; i++) {
        string[i] = string[i][0].toUpperCase();
}
return string.join('');
}) ("geetha");
  
  console.log(checkName);
  
  
  
 



// let oddout=(function sum-fun(num,num1){

//console.log(num+ num1)
// return num + num1
//} ) (10,20);
//console.log(oddout);



