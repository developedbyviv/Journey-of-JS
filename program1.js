// Write a JavaScript program to create a new string from a given string changing the position of first and last characters.
// The string length must be greater than or equal to 1.

let newStr = (str) => {
  if (str.length <= 1) return str;

  midChars = str.substring(1, str.length - 1);
  return (str.charAt(str.length - 1) + midChars + str.charAt(0))
};

console.log(newStr("Python"));
