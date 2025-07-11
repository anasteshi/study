const user = {
    nickname: "noapsi",
    age: 18,
    avatar: "white rose",
}
const userKeys = Object.keys(user)
const userValues = Object.values(user) // Returns an array of values of the enumerable own properties of an object.
const userEntries = Object.entries(user) // Returns an array of key/values of the enumerable own properties of an object.

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
