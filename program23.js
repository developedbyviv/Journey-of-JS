// Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.

let check = (num1,num2,num3) =>{
    if(num1 == num2 && num2 == num3)
        return 30
    
    if(num1 == num2 || num2 == num3 || num3 == num1)
        return 40
    
    return 20;
}

// console.log(check(2,2,3))
console.log(check(4,4,4));