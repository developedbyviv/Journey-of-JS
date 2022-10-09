// Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

let sumInRange = (num1,num2) =>{
    const sum = num1+num2

    if(sum >= 50 && sum <= 80)
        return 65
    else
        return 80
}

console.log(sumInRange(90,80));
