function calcAvg(a, b, c) {
    return (a + b + c) / 3
}

function triple(number) {
    return number * 3
}

function apply(fn, arg) {
    return fn(arg)
}

apply(triple, 4) // 12
apply(console.log, 4) // 4 & returned undefined
apply(String, 5) // '5'
apply(String, Math.PI) // '3.141592653589793'
apply(parseInt, Math.PI) // 3

let array = [1, 2, 3] // multiply each element of the array by 3
for (let i = 0; i < array.length; i++) {
    array[i] *= 3 // array [3, 6, 9]
    console.log(array[i])
}

function applyForEach(callback, array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]) // array [9, 18, 27]
    }
}
applyForEach(triple, array)

let ar42 = []
function write42At(i) {
    ar42[i] = 42
}
applyForEach(write42At, array) // array [undefined, undefined, undefined], because write42At() doesn't return any value
console.log(ar42) /* [empty × 9, 42, empty × 8, 42, empty × 8, 42]
9: 42
18: 42
27: 42
length: 28
*/

function add3(number) {
    return number + 3
}

function subtract3(number) {
    return number - 3
}

function divideBy3(number) {
    return number / 3
}

const example = [add3, add3, add3]
const example2 = [add3, triple, subtract3, divideBy3]

function compose(functions) {
    return function(value) {
        for (let i = 0; i < functions.length; i++) {
            value = functions[i](value)
        }
        return value
    }
    
}

const compose1 = compose(example) // 19
const compose2 = compose(example2) // 12

compose1(10)
compose2(10)

const temp = [4, 5, 6]
temp.forEach(write42At)
temp.forEach(triple)
temp.map(triple)
temp.filter(x => x % 2 === 0) 
temp.map(x => x % 2 === 0)

const promise = {
    reactions: [],
    then: (callback) => {
        promise.reactions.push(callback)
    },
    resolve: (x) => {
        promise.reactions.forEach((callback) => {callback(x)})
    }
}
promise.then(add3);
promise.resolve(5)

Array.prototype

const p = Object.create(promise) // a child of promise object



// const validate = (hasAccess) => {
//     if (hasAccess) {
//         return () => console.log("Access approved")
//     }
//     else {
//         return () => console.log("Access denied")
//     }
// }

const validate = (hasAccess) => hasAccess
    ? () => console.log("Access approved")
    :  () => console.log("Access denied")
const logMessage = validate(true) 
logMessage()