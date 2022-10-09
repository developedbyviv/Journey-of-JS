// Write a JavaScript program to capitalize the first letter of each word of a given string.

let capitalize = (str) =>{
    const arr = str.split(" ");

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
    }
    const str2 = arr.join(" ");
    return str2;
}

console.log(capitalize("hey this is vivek"));
