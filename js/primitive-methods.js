// Numbers

const price = 99.99
const number = 100
const numbers = [1, 2, 3, 4, 5, 6]
const number1String = number.toString(2) // toString() has an optional parameter for the base of a system of numeration (radix).
const number2String = "256.5px"

console.log("Round to 0 digits: ", price.toFixed()) // 100
console.log("Round to 2 digits: ", price.toFixed(2)) // 99.99
console.log("Round to 4 digits: ", price.toFixed(4)) // 99.9900

console.log(4..toFixed(3)) // 4.000
console.log((4.555).toFixed(2)) // 4.55

console.log(price.toPrecision(4)) // 99.99
console.log(price.toPrecision(3)) // 100

console.log(number1String) // 1100100

console.log("Random number: ", Math.random())
console.log("Absolute value: ", Math.abs(-3)) // 3

console.log("Square root: ", Math.sqrt(9)) // 3
console.log("Cube root: ", Math.cbrt(8)) // 2

console.log("Power: ", Math.pow(-3, 3)) // -27
console.log((-3) ** 3) // -27

console.log("Max value: ", Math.max(4, 6, 7, 3, -8)) // 7
console.log("Min value: ", Math.min(4, 6, 7, 3, -8)) // -8
console.log("Min value: ", Math.min(numbers)) // NaN
console.log("Min value: ", Math.min(...numbers)) // 1 – Because arrays are objects?

console.log(Math.round(32.5)) // 33 – Just a normal rounding
console.log(Math.floor(32.5)) // 32 – Round down
console.log(Math.ceil(32.5)) // 33 – Round up
console.log(Math.trunc(12.7)) // 12
console.log(Math.trunc(-12.7)) // -12

console.log(Number(number2String)) // NaN
console.log(+number2String) // Nan 
console.log(parseInt(number2String)) // 256 
console.log(parseFloat(number2String)) // 256.5


// Strings

const firstName = "Anastasiia"
const text = "SoMe teXT"
const textWithSpaces = "   So Many sPACes   "
const message = "Are you open minded?"
const string = "JavaScript"
const phoneNumber = "+81 3 1234-5678"

console.log(firstName.length) // 10
console.log(firstName[2]) // a
console.log(firstName.at(-2)) // i

console.log(text.toLowerCase()) // some text
console.log(text.toUpperCase()) // SOME TEXT

console.log(textWithSpaces.trim()) // So Many sPACes
console.log(textWithSpaces.toLowerCase().trim()) // so many spaces
console.log(textWithSpaces.trimStart()) // 'So Many sPACes   '
console.log(textWithSpaces.trimEnd()) // '   So Many sPACes'

console.log(message.indexOf("open mind")) // 8
console.log(message.indexOf("bye")) // -1

console.log(message.includes("open")) // true
console.log(message.startsWith("ed")) // false
console.log(message.endsWith("?")) // true

console.log(message.indexOf("open mind", 3)) // 8
console.log(message.includes("open", 14)) // false – starts from 14th index character
console.log(message.startsWith("ed", 2)) // false
console.log(message.endsWith("?", 1)) // false, because the second optional parameter becomes a new ending index

console.log(string.substring(0, 4)) // Java
console.log(string.substring(4)) // Script

console.log(string.slice(4)) // Script
console.log(string.slice(-6)) // Script
console.log(string.slice(-6, -3)) // Scr

console.log(string.repeat(3)) // JavaScriptJavaScriptJavaScript

console.log(message.replace("minded", "wallet")) // Are you open wallet?
console.log(message.replaceAll("o", "#")) // Are y#u #pen minded?

console.log(message.replace(/a/g, "?"))
console.log(message.replaceAll(/a/gi, "?")) // ?re you open minded? /a/gi searches for all upperCase and lowerCase A's

console.log(phoneNumber.replace(/\d/g, "#")) // +## # ####-####

console.log(message.split(" ")) // [ 'Are', 'you', 'open', 'minded?' ]
console.log(message.split("")) /* [
'A', 'r', 'e', ' ', 'y',
'o', 'u', ' ', 'o', 'p',
'e', 'n', ' ', 'm', 'i',
'n', 'd', 'e', 'd', '?'
] */

// Exercise: validate user input

const value = prompt("Enter your name, please: ", "")
const clearValue = value.trim().toLowerCase()

if (clearValue.length < 3 || clearValue.length > 20) 
    alert("Invalid name!")

if (clearValue.includes("admin")) 
    alert("This name cannot be used.")
