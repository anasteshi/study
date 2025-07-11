const array = ["Anna", 3]
const [name, age] = array
const letters = ["A", "B", "C", "D"]

console.log(name)
console.log(age)

letters.forEach((element, index, array) => { // Does the same thing as for loop, but way better
    console.log(`For the index ${index} we have a letter ${element}`) // All the parameters are optional
    console.log(`Here's the array we're working with ${array}`)
})

letters.forEach((letter) => {
    console.log(letter.concat("AAA"))
})
