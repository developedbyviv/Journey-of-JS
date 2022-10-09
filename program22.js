// Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8. 

let check = (num1,num2) =>{
    if(num1 === 8 || num2 === 8)
        return true
    else{
        if((num1+num2) == 8 || Math.abs(num1 - num2) == 8)
            return true
    }
    return false
}

console.log(check(2,3));