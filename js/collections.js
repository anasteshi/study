const user1 = {
    nickname: "noapsi",
    age: 18,
    avatar: "white rose",
}
const user2 = {
    nickname: "dikabrazz",
    age: 25,
    avatar: "fox",
}
const userKeys = Object.keys(user1)
const userValues = Object.values(user1) // Returns an array of values of the enumerable own properties of an object.
const userEntries = Object.entries(user1) // Returns an array of key/values of the enumerable own properties of an object.

// const userEntriesFormatted = userEntries.at("a") // What's wrong?
const userEntriesFormatted = userEntries.map(([key, value]) => [key.toUpperCase(), `**${value}&&`])
const userFormatted = Object.fromEntries(userEntriesFormatted) // Returns an object created by key-value entries for properties and methods.

userValues.forEach((value) => console.log(value))
userEntries.forEach(([key, value]) => {
    // const key = entry[0]
    // const value = entry[1]

    console.log(`Key: ${key}\nValue: ${value}`)
})

// console.log(userEntriesFormatted.at("a") === userEntriesFormatted.at(0)) // true Why??
console.log(userKeys)
console.log(userValues)
console.log(userEntries)
console.log(userEntriesFormatted) 
console.log(userFormatted) 

const data1 = new Map([
    [1, "Number 1"],
    ["1", "String 1"],
])
const data2 = new Map()

data2.set(1, "Number 1")
data2.set("1", "String 1")

console.log(data1.get(1)) // Returns a specified element from the Map object.
console.log(data2.get("1"))

console.log(data1.has("name")) // Returns boolean indicating whether an element with the specified key exists or not.

console.log(data1.size) // The number of elements in the Map. Similar to .length

data2.delete("1") // Deletes key-value elements of the Map.
data2.clear() // Clears the Map.

console.log("Keys:", data1.keys())
console.log("Values:", data1.values())
console.log("Entries:", data1.entries())

for (const key of data1.keys()) {
    console.log("Key:", key)
}

for (const value of data1.values()) {
    console.log("Value:", value)
}

for (const entry of data1.entries()) {
    console.log("Entry:", entry)
}

data1.forEach((value, key, map) => console.log(`Key: ${key}\nValue: ${value}\nMap: ${map}`))

// const map = new Map(Object.entries(user2))
// map.forEach((value, key) => console.log(`${key}: ${value}`))

const map = new Map([
    ["nickname", "noapsi"],
    ["age", 18],
    ["avatar", "white rose"],
])

const guy = Object.fromEntries(map)

console.log(guy)

// Properties of Object are always strings.
// Properties of Map can be of any type.
