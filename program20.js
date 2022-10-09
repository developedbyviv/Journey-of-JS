// Check whether the characters a and b are separated by exactly 3 places anywhere in a given string

let seperateAB = (str) => {
  // The test() method tests for a match in a string.
  // If it finds a match, it returns true, otherwise it returns false.
  return /a...b/.test(str) || /b...a/.test(str);
};

console.log(seperateAB("Chainsbreak"));
