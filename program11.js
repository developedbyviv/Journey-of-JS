// Write a JavaScript program to find the largest of three given integers

function maxNum(x,y,z){
    maxValue = 0
    if(x>y)
        maxValue = x
    else
        maxValue = y
    
    
    if(z > maxValue)
        maxValue = z
    
    return maxValue
    
}

console.log(maxNum(1,10,8));