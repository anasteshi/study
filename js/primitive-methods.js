const price = 99.99
const number = 100
const numberString = number.toString(2) // 1100100 – toString() has an optional parameter for the base of a system of numeration (radix).

console.log("Round to 0 digits: ", price.toFixed())
console.log("Round to 2 digits: ", price.toFixed(2))
console.log("Round to 4 digits: ", price.toFixed(4))

console.log(4..toFixed(3))
console.log((4.555).toFixed(2))

console.log(price.toPrecision(4))
console.log(price.toPrecision(3))

console.log(numberString)