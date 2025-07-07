const n = 6

let result = ""


/*
                *
                **
                ***
                ****
                *****
                ******
*/


                // Solution #1


// for (let i = 1; i <= n; i++) {
// 	for (let j = 0; j < i; j++) {
// 		result += "*"
// 	}

// 	result += "\n"
// }

// console.log(result)


                // Solution #2


// for (let i = 0; i <= n; i++) {
//     result += "*".repeat(i) + "\n"
// }

// console.log(result)


/*
                ******
                *****
                ****
                ***
                **
                *
*/


// for (let i = 1; i <= n; i++) {
// 	for (let j = i; j <= n; j++) {
// 		result += "*"
// 	}

// 	result += "\n"
// }

// console.log(result)


/*
                     *
                    **
                   ***
                  ****
                 *****
                ******
*/


// for (let i = 1; i <= n; i++) {
// 	for (let j = 1; j <= n; j++) {
// 		result += j <= n - i ? " ": "*"
// 	}

// 	result += "\n"
// }

// console.log(result)


/*
                ******
                 *****
                  ****
                   ***
                    **
                     *
*/


for (let i = 0; i < n; i++) {
	for (let j = n; j > 0; j--) {
		result += j > n - i ? " ": "*"
	}

	result += "\n"
}

console.log(result)