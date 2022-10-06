// Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7

let findMultiple = (num) => {
  if (num > 0) {
    if (num % 3 === 0 || num % 7 === 0) return true;
    else return false;
  }else
    console.log("Please enter a Integer!");
};

console.log(findMultiple(-1));