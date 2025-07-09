/*  Function declaration.
    The advantage of this function type is that it can actually be used before its declaration (it's called hoisting).
    It can also be overwritten.
    With this type of function a special array-like object can be used to include all the parameters of the function.
*/

logHello() // "Farewell!"

function logHello() {   // parameter
    console.log("Hello, my dear friend!")
}
logHello() // Still "Farewell!" because of the hoisting – thanks to 'function' keyword all function declarations are moved to the top of their scope

function logHello() {  
    console.log("Farewell!")
}

function useAll() {
    console.log(arguments)
}
useAll("Hello", "I'm Nastya", 18)


/*  Function expression.
    This type of function cannot be overwritten, if 'const' is used.
    However if it's var or let that we use, function can be overwritten like any other var or let variable.
    Cannot be used before declaration.
    Has access to 'arguments'.
*/

const makeHappy = function () {
    console.log("Here's a bunch of beautiful flowers for you! 💐🌹🪻🪷🌺🌸🌼🌻")
}
makeHappy()


/*  Arrow function.
    Just like function expression, arrow functions cannot be used before their declaration.
    Doesn't have access to 'arguments' special array-like object.
    No need to explicitly use return if the function was declared in one line.
*/

const addNumbers = (a, b) => {
    return a + b
}
console.log(addNumbers(2, 3))

const subtractNumbers = (c, d) => c - d
console.log(subtractNumbers(4, 2))


// Functions as values

const fn1 = () => "I'm function number 1"
const fn2 = fn1
console.log(fn2())


/*  Callback functions.
    These are functions that are passed as arguments to another function and are called (or called back) later.
*/

const doSomething = (actionBefore, actionAfter) => {
    actionBefore()
    console.log("Doing all the important work!")
    actionAfter()
}

const writeLetter = () => console.log("Writing letter...")
const sendLetter = () => console.log("Sending letter...")

doSomething(writeLetter, sendLetter)
doSomething(
    () => console.log("Mopping the floor..."),
    () => console.log("Doing dishes..."))


// Function returns a function

const validate = (hasAccess) => {
    if (hasAccess) {
        return () => console.log("Access is approved!")
    }
    
    return () => console.log("Access denied...")
}

const result = validate(true)
result()
