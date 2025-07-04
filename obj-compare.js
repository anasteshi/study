// Compare two objects using recursion
const person1 = {
	name: "Anastasiia",
	age: 18,
	hobbies: {
		drawing: "digital",
		language: "French",
		sport: "tennis",
	},
}

const person2 = {
	name: "Anastasiia",
	age: 18,
	hobbies: {
		drawing: "digital",
		language: "French",
		sport: "tennis",
	},
}

function compareObjects(object1, object2) {
	const keys1 = Object.keys(object1)
	const keys2 = Object.keys(object2)

	for (const key in object1) {
		const value1 = object1[key]
		const value2 = object2[key]

		if (typeof value1 === "object" && typeof value2 === "object")
			return compareObjects(value1, value2) // return is necessary, because the next line compares values, so if values are objects, compareObjects() returns false even if objects are basically identical

		if (value1 !== value2) return false
	}
	return true
}

console.log(compareObjects(person1, person2))
