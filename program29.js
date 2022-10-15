// Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.

let swapPairs = (num) =>{
    // check the number is it even or odd. if odd return false
    if(num.toString().length % 2 != 0)
        return false
    
    let result = 0;
    let x = 1;

    while(num != 0){
        let digit1 = num % 10;
        let digit2 = ((num - digit1) / 10) % 10;

        result += x * (10 * digit1 + digit2); 

        num = Math.floor(num / 100);
        x *= 100;
    }
    return result;
}

console.log(swapPairs(12345));

