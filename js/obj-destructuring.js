const object = {
	name: "pineapple",
	expiryDate: "12.12.2025",
	color: "yellow",
	price: 23,
}

const {name, color} = object
console.log("Color:", color)
console.log("Name:", name)

const logAddress = ({city, street, houseNumber, apartmentNumber}) => {
	// const {city, street, houseNumber, apartmentNumber} = address
	// console.log(`Address: ${city}, ${street}, house ${houseNumber}, apartment ${apartmentNumber}`)
}

logAddress({
	city: "New York",
	street: "North Street",
	houseNumber: 24,
	apartmentNumber: 15,
})

const girl = {
	name: "Kate",
	age: 17,
}
const user = {
	name: "katexxlyn",
}
const {name: firstName} = girl
const {name: nickname} = user
const {age: realAge = "Unknown"} = girl // 17
const {age: onlineAge = "Unknown"} = user // Unknown

// Rest parameters
const logUser = (user) => {
	const {name, age, city, ...other} = user
	console.log(`Dear ${name}, you are ${age} years old and you live in ${city}`)
	console.log(`Besides, I know that you...${JSON.stringify(other)}`)
}

logUser({
	name: "Stanislav",
	age: 18,
	city: "Athens",
	hasJob: true,
	isHappy: false,
})
