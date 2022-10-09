// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back.
// The string length must be 3 or more

let swapChars = (str) => {
  if (str.length >= 3) {
    backChars = str.substring(str.length - 3); // stores last three characters
    return backChars + str + backChars; // return the new string
  } else {
    return false;
  }
};
console.log(swapChars("Swift"));
