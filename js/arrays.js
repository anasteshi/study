const letters = ["A", "B", "C", "D"]

letters.push("E", "F") // Adds elements to the end of the array
console.log(letters) 

letters.unshift("E", "F") // Adds elements to the start of the array
console.log(letters) 

console.log(letters.pop()) // Removes the last element of the array and returns this element's value

console.log(letters.shift()) // Removes the first element of the array and returns it