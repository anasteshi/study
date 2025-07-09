// Keyword 'this'

const user = {
	name: "Anastasiia",
	age: 18,
	logThis() {
		console.log("this in user object's method: ", this)
		console.log("this.name: ", this.name)
	},
	address: {
		city: "Paris",
		zipcode: 777,
		logInnerThis: function () {
			console.log("this in address object's method: ", this)
		},
	},
}
user.logThis()
user.address.logInnerThis()


// Same 'this', different values

const user1 = {name: "Anna"}
const user2 = {name: "Irene"}

function logInfo() {
	console.log("this: ", this)
	console.log("this.name: ", this.name)
}
logInfo()

user1.logName = logInfo
user2.logName = logInfo

user1.logName()
user2.logName()


// Exercise: simple calculator

const calculator = {
    read() {
        this.a = +prompt("Enter a: ", "0")
        this.b = +prompt("Enter b: ", "0")
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    },
}

calculator.read()
console.log(calculator)
console.log("Sum: ", calculator.sum())
console.log("Product: ", calculator.mul())


// Exercise: simple calculator

const ladder = {
    step: 0,
    up() {
        this.step++
        return this
    },
    down() {
        this.step--
        return this
    },
    showStep() {
        console.log(this.step)
        return this
    }
}

// Chaining 

ladder.up().up().down().showStep().down().showStep() // 1 and then 0