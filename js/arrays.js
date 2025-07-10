const letters = ["A", "B", "C", "D"]
const array1 = ["Apple", true, 1.5, [{}]]
const array2 = []
const array3 = ["Apple", true, 1.5, [{}]]
const array4 = array1.slice() // Returns a copy of a section of the array
const combined1 = [...array1, ...array2, ...array3, ...array4]
const combined2 = array1.concat(array4) // Combines two or more arrays
const message = "One, Two, Three, Four, Five, Six"

letters.push("E", "F") // Adds elements to the end of the array
console.log(letters) 

letters.unshift("E", "F") // Adds elements to the start of the array
console.log(letters) 

console.log(letters.pop()) // Removes the last element of the array and returns this element's value

console.log(letters.shift()) // Removes the first element of the array and returns it

console.log(array1.toString()) // Converts types to string, separating them by comas

console.log(array1.join(", ")) // Does the same thing as toString(), but the separator can be chosen

console.log(message.split(", ").join(", "))

for (let i = 0; i < array1.length; i++) {
    array2.push(array1[i])
}

array2[0] = "Peach"

console.log(array1)
console.log(array2)
console.log(array3)
console.log(array4)

console.log(combined1)
console.log(combined2)

const areArraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length)
        return false

    for (let i = 0; i < arr1.length; i++) {
        const value1 = arr1[i]
        const value2 = arr2[i]
        const areValuesArray = Array.isArray(value1) && Array.isArray(value2) // Array is a global object which has a method isArray.

        if (areValuesArray) {
            if (!areArraysEqual(value1, value2)) {
                return false
            } else {
                continue
            }
        }

        if (typeof value1 === "object" && typeof value2 === "object") {
            return areArraysEqual(value1, value2)
        }

        if (value1 !== value2)
            return false

    }

    return true
}

console.log(areArraysEqual(array1, array3))