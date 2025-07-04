const user = {                      // 1 Initialize object
    name: "Anastasiia",
    age: 18,
    city: "Oslo"
}
console.log(user.name)
console.log(user.age)
console.log(user.city)



user.isAdmin = true                 // 2 Add and delete properties
delete user.city
console.log(user)



console.log("age" in user)          // 3 Check existing properties



const car = {                       // 4 Create new object and loop through all its elements
    brand: "Toyota",
    model: "Camry",
    year: "2008"
}
for (const key in car) {
    console.log(`Key: ${key} \t value: ${car[key]}`)
}



const obj1 = {                      // 5 Compare two objects
    name: "Maria",
    hasPets: true
}
const obj2 = {
    name: "Maria",
    hasPets: true
}
console.log(obj1 == obj2) // false
console.log(obj1 === obj2) // false
// Because those were different reference links, objects are not in the same place in memory
// but
let obj3 = obj2
console.log(obj3 == obj2) // true
console.log(obj3 === obj2) // true



function countProps(object) {       // 6 Count properties of an object
    const count = Object.keys(object) // or just return Object.keys(object).length
    return count.length
}
console.log(countProps(user))
console.log(countProps(obj1))



// function copyObj(object) {          // 7 Copy object
//     const newObj = {}
//     for (const key in object) {
//         newObj[key] = object[key]
//     }
//     return newObj
// }

// function copyObj(object) {         
//     const newObj = {}
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             newObj[key] = key
//         }
//     }
//     return newObj
// }

// const result = Object.assign({}, obj1)

const result = { ...obj1} // ... spread operator

console.log(result)


const products = [                  // 8 Array of objects
    {
        name: "melon",
        price: 10
    },
    {
        name: "bread",
        price: 4
    },
    {
        name: "chocolate",
        price: 5
    }
]
function affordableProducts(productsToCheck) {
    const affordable = []
    for (const product in productsToCheck) {
        if (productsToCheck[product].price < 10)
            affordable.push(productsToCheck[product].name)
    }
    return affordable
}
console.log(affordableProducts(products))



const people = [                    // 9 Group properties
    {
        name: "Anastasiia",
        city: "Tokyo"
    },
    {
        name: "Ivan",
        city: "Berlin"
    },
    {
        name: "Isaac",
        city: "Berlin"
    }
]
function groupByCity(users) {
    const grouped = {}
    for (const index in users) {
        const city = users[index].city
        const name = users[index].name
        if (!grouped[city]) {
            grouped[city] = []
        }
        grouped[city].push(name)
    }
    return grouped
}

console.log(Object.groupBy(people, user => user.city)) // Group objects by property 

console.log(groupByCity(people))