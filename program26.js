// Write num1 JavaScript program to check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11.

let checkMultiple = (num1, num2) => {
  if (!((num1 % 7 == 0 || num1 % 11 == 0) && (num2 % 7 == 0 || num2 % 11 == 0)))
    return num1 % 7 == 0 || num1 % 11 == 0 || num2 % 7 == 0 || num2 % 11 == 0;
  else return false
};

console.log(checkMultiple(14, 21));
console.log(checkMultiple(14, 20));
console.log(checkMultiple(16, 20));
