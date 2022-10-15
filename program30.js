// learn about Array in javascript

// let fruits = ["Apple", "Mango", "Orange"];
// let Vegitable = ["Potato", "Tomato", "Radish", "Spinach"];
// let empty = [];
//concat() is method that concatenates / joins two or more arrays. It returns a new a array, containing the joined arrays.
// syntax for concat() : arr1.concat(arr2,arr3)
// parameter for the arrays is arrays, that are required to be join/concatenation.
// let mix_veg = fruits.concat(Vegitable)
// let mix_veg = empty.concat(fruits,Vegitable)

// console.log(mix_veg);

// copyWithin() is used to copy the array element with in the existing array positions.
// syntax for the copyWithin() array.copyWithin(target, start, end)

// parameter of copyWithin()
// target - Required.
// The index (position) to copy the elements to.
// start - Optional.
// The start index (position). Default is 0.
// end - Optional.
// The end index (position). Default is the array length.

// const numbers = ['Q','W','E','R','T','Y']
// numbers.copyWithin(1,4)
// console.log(numbers);

// entries() method returns an array iterator object with key/value pairs
// [0, "Banana"]
// [1, "Orange"]
// [2, "Apple"]
// no parameter for entries()
// syntax for entries() - array.entries()
// const ob = fruits.entries();
// console.log(ob);

// The every() method executes a function for each array element.
// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.
// The every() method does not execute the function for empty elements.
// The every() method does not change the original array
// syntax for every() - array.every(function(currentValue, index, arr), thisValue)

// parameter for every()
// function() - Required.
// A function to be run for each element in the array.
// currentValue - Required.
// The value of the current element.
// index - Optional.
// The index of the current element.
// arr - Optional.
// The array of the current element.
// thisValue - Optional. Default undefined.
// A value passed to the function as its this value.

// const ages = [32, 33, 19, 40];

// console.log(ages.every(checkAge));
// function checkAge(age) {
//   return age > 18;
// }

// The some() method checks if any array elements pass a test (provided as a callback function).
// The some() method executes the callback function once for each array element.
// The some() method returns true (and stops) if the function returns true for one of the array elements.
// The some() method returns false if the function returns false for all of the array elements.
// The some() method does not execute the function for empty array elements.
// The some() method does not change the original array.

// syntax of some() - array.some(function(value, index, arr), this)

// Parameter
// function - Required.
// A function to run for each array element.
// Function - parameters:
// value - Required.
// The value of the current element.
// index - Optional.
// The index of the current element.
// arr - Optional.
// The array the current element belongs to.
// this	Optional. - Default undefined.
// A value passed to the function to be used as its "this" value.

// const ages = [2, 3, 1, 4];

// console.log(ages.some(checkAge));
// function checkAge(age) {
//   return age > 18;
// }

// The fill() method fills specified elements in an array with a value.
// The fill() method overwrites the original array.
// Start and end position can be specified. If not, all elements will be filled.

// The syntax of fill() - array.fill(value, start, end)
// The parameter of the fill()
// value - Required.
// The value to fill in.
// start - Optional.
// The start index (position).
// Default is 0.
// end - Optional.
// The stop index (position).
// Default is array length.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.fill("Kiwi", 1);
// console.log(fruits);

// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

// const ages = [32,17,24,18,42];

// let checkAdult = (age) => {
//     return age >= 18;
// }
// const result = ages.filter(checkAdult);
// console.log(result);

// The find() method returns the value of the first element that passes a test.
// The find() method executes a function for each array element.
// The find() method returns undefined if no elements are found.
// The find() method does not execute the function for empty elements.
// The find() method does not change the original array.
// the syntax for the find() - array.find(function(currentValue, index, arr),thisValue)
// Parameter for the find()
// function() - Required.
// A function to run for each array element.
// currentValue - Required.
// The value of the current element.
// index - Optional.
// The index of the current element.
// arr - Optional.
// The array of the current element.
// thisValue - Optional. Default undefined.
// A value passed to the function as its this value.

// const ages = [12, 17, 24, 18, 42];

// let checkAdult = (age) => {
//   return age >= 18;
// };
// const result = ages.find(checkAdult);
// console.log(result);

// The findIndex() method executes a function for each array element.
// The findIndex() method returns the index (position) of the first element that passes a test.
// The findIndex() method returns -1 if no match is found.
// The findIndex() method does not execute the function for empty array elements.
// The findIndex() method does not change the original array.

// the syntax of findIndex() - array.findIndex(function(currentValue, index, arr), thisValue)
// function() - Required.
// A function to be run for each array element.
// currentValue - Required.
// The value of the current element.
// index - Optional.
// The index of the current element.
// arr - Optional.
// The array of the current element.
// thisValue - Optional. Default undefined.
// A value passed to the function as its this value.

// const ages = [12, 17, 24, 18, 42];

// let checkAdult = (age) => {
//   return age >= 18;
// };
// const result = ages.findIndex(checkAdult);
// console.log(result);

// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.

// The syntax for forEach() - array.forEach(function(currentValue, index, arr), thisValue)

// function() - Required.
// A function to run for each array element.
// currentValue - Required.
// The value of the current element.
// index - Optional.
// The index of the current element.
// arr - Optional.
// The array of the current element.
// thisValue - Optional. Default undefined.
// A value passed to the function as its this value.

let sum = 0;
const numbers = [65,23,21,34,56,72]

let addNumbers = (item) =>{
    sum += item;
}

let result = numbers.forEach(addNumbers);
console.log(result);
