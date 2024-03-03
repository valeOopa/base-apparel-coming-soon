// Function to validate email
const validEmail = (emailValue) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(emailValue);
};

// Function for error message
let showError = (input, message) => {
	input.style.border = "2px solid hsl(0, 93%, 68%)";
	let errorText = document.getElementById("errorText");
	errorText.innerText = message;
	errorText.style.color = "hsl(0, 93%, 68%)";
	let errorImage = document.getElementById("errorImage");
	errorImage.classList.add("errorImage");
	errorImage.style.display = "block";
};

// Function for success
let success = (input, message) => {
	input.style.border = "2px solid hsl(0, 36%, 70%)";
	let errorText = document.getElementById("errorText");
	errorText.innerText = message;
	errorText.style.color = "hsl(0, 36%, 70%)";
	errorImage.style.display = "none";
};

// Function to validate the form
const validateForm = (event) => {
	event.preventDefault();

	let emailInput = document.getElementById("email");
	let emailValue = emailInput.value.trim();

	if (emailValue === "") {
		showError(emailInput, "Whoops! It looks like you forgot to add your email");
		return false;
	} else if (!validEmail(emailValue)) {
		showError(emailInput, "Please provide a valid email address");
		return false;
	} else {
		success(emailInput, "Your email is valid");
		return true;
	}
};

document.getElementById("form").addEventListener("submit", validateForm);
