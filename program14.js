// Check two given integers, whether one is positive and another one is negative

let checkInteger = (num1,num2) =>{
    if ((num1 > 0 || num2 < 0) || (num1 < 0 || num2 > 0))
        return true
    else
        return false
}

console.log(checkInteger(-1,2));