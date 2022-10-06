// Create a new string from a given string with the first character of the given string added at the front and back

function charFromFront(str1){
    firstChar = str1.substring(0,1);
    return firstChar + str1 + firstChar;
}

console.log(charFromFront("Vivek"));