// Write a JavaScript program to find a value which is nearest to 100 
// from two different given integer values.


function findNearestValue(x,y){
    if(x>y){
        maxValue = x
        console.log(maxValue);
    }
    else{
        maxValue = y
        console.log(maxValue);
    }
}

console.log(findNearestValue(42,24));