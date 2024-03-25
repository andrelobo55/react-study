var numbers = [3, 56, 2, 48, 5];

console.log("Array de numbers " + numbers);

//Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map(function(num) {
    return num;
})

console.log("map: " + newNumbers);

//Filter - Create a new array by keeping the items that return true.
const newNumbers2 = numbers.filter(function(num) {
    return num > 10;
})

console.log("filter: " + newNumbers2);

//Reduce - Accumulate a value by doing something to each item in an array.
const newNumbers3 = numbers.reduce(function(num, nextNum) {
    return num + nextNum;
})

console.log("reduce: " + newNumbers3);

//Find - find the first item that matches from an array.
const newNumbers4 = numbers.find(function(num) {
    return num > 10;
})

console.log("find: " + newNumbers4);

//FindIndex - find the index of the first item that matches.
const newNumbers5 = numbers.findIndex(function(num) {
    return num > 10;
})

console.log("find index: " + newNumbers5);