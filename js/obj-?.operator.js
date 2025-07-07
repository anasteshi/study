// Optional chaining
const dog = {
    name: "Mika",
    age: 3,
    // favoriteFood: {
    //     fruits: "banana",
    //     veggies: "cucumber"
    // }
}
console.log(dog.favoriteFood?.fruits) // w/o ?. there's a TypeError : Cannot read properties of undefined