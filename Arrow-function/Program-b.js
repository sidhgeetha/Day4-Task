//Convert all the strings to title caps in a string array

const checkName = (string) =>{
    string = string.toLowerCase().split('');
    console.log(string);
    for (let i = 0; i < 1; i++) {
        string[i] = string[i][0].toUpperCase()
}
return string.join('');
};


console.log(checkName("geetha"))

