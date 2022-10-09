// Write a JavaScript program to convert the letters of a given string in alphabetical order. 

let sortify = (str) =>{
    return str.split("").sort().join("");
}

console.log(sortify("321"));
