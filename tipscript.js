// The scripting for my tip calculator


function calculate(input1, percent) {
	return input1 * percent;
}

// CALCULATE 15 PERCENT

function calcFifteen() {
	var input = document.getElementById('userinput').value;
	var response = document.getElementById('response');

	if (isNaN(input)) {
		response.innerHTML = 'Please enter a number';
	}

	else {

		var total = calculate(input, 1.15).toFixed(2);

		response.innerHTML = '$' + total;
	}

}

// CALCULATE 20 PERCENT

function calcTwenty() {
	var input = document.getElementById('userinput').value;
	var response = document.getElementById('response');

	if (isNaN(input)) {
		response.innerHTML = 'Please enter a number';
	}

	else {

		var total = calculate(input, 1.20).toFixed(2);

		response.innerHTML = '$' + total;
	}

}

// CALCULATE 25 PERCENT

function calcTwentyFive() {
	var input = document.getElementById('userinput').value;
	var response = document.getElementById('response');

	if (isNaN(input)) {
		response.innerHTML = 'Please enter a number';
	}

	else {

		var total = calculate(input, 1.25).toFixed(2);

		response.innerHTML = '$' + total;
	}

}


