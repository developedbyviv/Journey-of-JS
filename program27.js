// Write a JavaScript program to check whether a given number is presents in the range 40..10000.

let numberInRange = (num) =>{
    if(num >= 40 || num <= 10000)
        return true
    else
        return false
}

console.log(numberInRange(56));