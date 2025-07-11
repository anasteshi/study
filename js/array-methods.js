const array = ["Anna", 3]
const [name, age] = array
const letters = ["A", "B", "C", "D"]
const prices = [11, 22, 33, 44, 55, 44]
const people = [
	{
		status: "married",
		age: 25,
	},
	{
		status: "married",
		age: 34,
	},
	{
		status: "single",
		age: 18,
	},
]
const formattedPeople = people.map((person) => `This person is ${person.age} years old and is ${person.status}`) // Calls a defined callback function on each element of an array, and returns an array that contains the results.

console.log(name)
console.log(age)

letters.forEach((element, index, array) => {
	// Does the same thing as for loop, but way better
	console.log(`For the index ${index} we have a letter ${element}`) // All the parameters are optional
	console.log(`Here's the array we're working with ${array}`)
})

letters.forEach((letter) => {
	console.log(letter.concat("AAA")) // Returns a string that contains the concatenation of two or more strings.
})

console.log(prices.indexOf(22)) // 1
console.log(letters.indexOf("C")) // 2
console.log(letters.indexOf("G")) // -1
console.log(prices.indexOf(444)) // -1

prices.forEach((price) => {
	price += 11
	console.log(`Element ${price} exists?: ${prices.indexOf(price) !== -1}`)
}) /*
Element 22 exists?: true
Element 33 exists?: true
Element 44 exists?: true
Element 55 exists?: true
Element 66 exists?: false
Element 55 exists?: true
*/

console.log(prices.indexOf(44, 4)) // 5 – indexOf has a second optional parameter for starting index (going to the right).

console.log(prices.lastIndexOf(44, 4)) // 3 – lastIndexOf does the same thing, but going to the left.

console.log(people.indexOf({status: "married", age: 25})) // DOESN'T work with objects because of their reference-type behavior

console.log(people.findIndex((person) => person.age === 18)) // Returns the index of the first element in the array where predicate is true
console.log(people.findLastIndex((person) => person.age === 25)) // Same but from right to left

console.log(prices.includes(22)) // true – also has an optional parameter for starting index
console.log(people.includes({status: "married", age: 34})) // DOESN'T work with objects because of their reference-type behavior

console.log(people.some((person) => person.age === 34)) // Determines whether the specified callback function returns true for any element of an array.

console.log(people.every((person) => person.age === 10)) // Determines whether all the members of an array satisfy the specified test.

console.log(people.find((person) => person.status === "single")) // Returns the value of the first element in the array where predicate is true, and undefined otherwise.

console.log(people.filter((person) => person.status === "married")) // Returns the elements of an array that meet the condition specified in a callback function.

console.log(formattedPeople) /*
[
    'This person is 25 years old and is married',
    'This person is 34 years old and is married',
    'This person is 18 years old and is single'
]
*/
