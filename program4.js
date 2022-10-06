// Check whether a string starts with 'Java' and false otherwise

let checkWord = (str) =>{
    if(str.length <= 4){
        word = str.substring(0,3)
        if(word === "Java")
            return true
        else
            return false

    }
}
console.log(checkWord("javaScript"));