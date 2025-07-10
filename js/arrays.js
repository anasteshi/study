const letters = ["A", "B", "C", "D"]
const array = ["Apple", true, 1.5]

letters.push("E", "F") // Adds elements to the end of the array
console.log(letters) 

letters.unshift("E", "F") // Adds elements to the start of the array
console.log(letters) 

console.log(letters.pop()) // Removes the last element of the array and returns this element's value

console.log(letters.shift()) // Removes the first element of the array and returns it

console.log(array.toString()) // Converts types to string, separating them by comas

console.log(array.join(", ")) // Does the same thing as toString(), but the separator can be chosen