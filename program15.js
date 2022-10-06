// Write a JavaScript program to remove a character at the specified position of a given 
// string and return the new string.

let removeChar = (str,loc) =>{
    firstHalf = str.substring(0,loc);
    secondHalf = str.substring(loc+1,str.length);

    return (firstHalf + secondHalf)
}
console.log(removeChar("Vivek",3));