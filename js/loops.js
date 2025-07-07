const n = 6

let result = ""

// for (let i = 1; i <= n; i++) {
// 	for (let j = 0; j < i; j++) {
// 		result += "*"
// 	}

// 	result += "\n"
// }

// console.log(result)

for (let i = 0; i < n; i++) {
    result += "*".repeat(i) + "\n"
}

console.log(result)