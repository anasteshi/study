const name = "Anastasia"
const age = 18
const hasMoney = false
const hasJob = false
const hasMotivation = true
const hasFreeTime = true

if (!hasMoney || !hasJob || (hasMotivation && hasFreeTime)) {
	console.log("Let's code!")
}

console.log(NaN && 2 && undefined) //NaN
console.log(1 && 2 && 3) //3
console.log((!1 && 2) || 3) //3
console.log(25 || (null && !3)) //25
console.log(NaN || null || !3 || undefined || 5) //5
console.log(NaN || (null && !3 && undefined) || 5) //5
