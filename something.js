// "use strict"

function pow(x, n) {
	let result = 1

	if (n > 0) {
		for (let i = 0; i < n; i++) {
			result *= x
		}
	} else if (n < 0) {
		for (let i = n; i < 0; i++) {
			result *= 1 / x
		}
	}

	return result
}

let x = prompt("What's x?: ")
let n = prompt("What's n?: ")

alert(pow(x, n))
