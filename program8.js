// Write a JavaScript program to create a new string adding "Py" in front of a given string. 
// If the given string begins with "Py" then return the original string.

function checkString(str1){
    if(str1 == null || str1 === undefined || str1.substring(0,2) === 'Py')  // We use substring to seprate out a string from the existing string.
        return str1;
    else
        return `Py${str1}`
}

console.log(checkString("python"));