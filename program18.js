// Write a JavaScript program to convert a given number to hours and minutes.

let convertNum = (num) =>{
    hour = parseInt(num/60)
    min = num % 60

    // return ("its " + hour + " hours" + " " + min + " " + "mins")
    return (`Its ${hour} hours and ${min} mins.`)
}

console.log(convertNum(100));

