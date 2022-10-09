// Check two given integer values and return true if one of the number is 15 or if their sum or difference is 15

let checkSum = (num1,num2) =>{
    return (num1 == 15 || num2 == 15 || (num1+num2) == 15 || Math.abs((num1-num2) == 15))
}

console.log(checkSum(7,7));