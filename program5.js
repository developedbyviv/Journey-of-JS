// Write a JavaScript program to reverse a given string.
let reverseStr = (str) =>{
    return str.split("").reverse().join("")
    // split() is used to seperate characters into arrays. And its return a new array.
    // reverse() is used to reverse a array.
    // join() is used to join the array.
}

console.log(reverseStr("Hello"));