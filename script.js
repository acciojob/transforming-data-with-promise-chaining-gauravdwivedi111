// Step 1
function step1(input) {
	return new Promise((resolve) => {
		setTimeout(() => {
			document.getElementById("output").textContent = `Result: ${input}`;
			resolve(input);
		}, 2000);
	});
}

// Step 2
function step2(value) {
	return new Promise((resolve) => {
		setTimeout(() => {
			const result = value * 2;
			document.getElementById("output").textContent = `Result: ${result}`;
			resolve(result);
		}, 2000); // 2 sec as required
	});
}

// Step 3
function step3(value) {
	return new Promise((resolve) => {
		setTimeout(() => {
			const result = value - 3;
			document.getElementById("output").textContent = `Result: ${result}`;
			resolve(result);
		}, 1000);
	});
}

// Step 4
function step4(value) {
	return new Promise((resolve) => {
		setTimeout(() => {
			const result = value / 2;
			document.getElementById("output").textContent = `Result: ${result}`;
			resolve(result);
		}, 1000);
	});
}

// Step 5
function step5(value) {
	return new Promise((resolve) => {
		setTimeout(() => {
			const result = value + 10;
			document.getElementById("output").textContent = `Final Result: ${result}`;
			resolve(result);
		}, 1000);
	});
}

// Button Click Event
document.getElementById("btn").onclick = function () {

	const inputValue = Number(document.getElementById("ip").value);

	// Clear previous output
	document.getElementById("output").textContent = "";

	step1(inputValue)
		.then(function(result) {
			return step2(result);
		})
		.then(function(result) {
			return step3(result);
		})
		.then(function(result) {
			return step4(result);
		})
		.then(function(result) {
			return step5(result);
		})
		.catch(function(error) {
			console.log("Error:", error);
		});
};