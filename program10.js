// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.

function checkNumberInRange(int1, int2) {
    if ((int1 >= 50 && int1 >= 99) || (int2 >= 50 && int2 >= 99)) return true;
    else return false;
}

console.log(checkNumberInRange(56,89));