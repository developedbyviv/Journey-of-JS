// Write a JavaScript program to check two given numbers and return true if one of the number is 50
// or if their sum is 50.

let checkNumber = (num1, num2) => {
  return num1 === 50 || num2 === 50 || num1 + num2 === 50;
};
console.log(checkNumber(50, 50));
