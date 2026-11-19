let inp = document.getElementById("numbe").value
function check() {
	let count = 9
	let inp = Number(document.getElementById("numbe").value)
	let output = document.getElementById("out")
	if (inp === count) {
		ou = "great,you guessed correctly"
        output.textContent = ou
		console.log(ou)
	} else if (inp > count) {
		ou = "too high"
        output.textContent = ou
		console.log(ou)
	} else if (inp < count) {
		ou = "too low"
        output.textContent = ou
		console.log(ou)
	}

}