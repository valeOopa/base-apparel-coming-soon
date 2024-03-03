"use strict" 
//A piece of information that may be useful to you, insert "use strict" at the beginning of the document, JS forces you to use some good 
//practices, such as always declaring the variables (var, let, const)

// Function to validate email
const validEmail = emailValue => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(emailValue);
};


//! Functions and and DOM objects like "document.getElementById" must be CONSTANT. It shouldn't change its value for anything
// Function for error message
// const showError = (input, message) => {
// 	input.style.border = "2px solid hsl(0, 93%, 68%)";
// 	errorText.textContent = message;
// 	errorText.style.color = "hsl(0, 93%, 68%)";
// 	errorImage.classList.add("form__errorImage");
// 	errorImage.style.display = "block";
// };

// Function for success
// const success = (input, message) => {
// 	input.style.border = "2px solid hsl(0, 36%, 70%)";
// 	errorText.textContent = message;
// 	errorText.style.color = "hsl(0, 36%, 70%)";
// 	errorImage.style.display = "none";
// };

// It is preferable to create a class with all the styles and assign that class to the element.
//Here I show you an example:

// Function for error message
const showError = (input,message) => {
	input.classList.add('inputError');
	// It is more preferable to use textContent, since it always inserts text. Also, I can recommend investigating the difference between innerHTML, innerText and textContent
	resultText.textContent = message;
	resultText.classList.add('errorText');
	resultText.classList.remove('successText');
	errorImage.classList.remove('none');
	errorImage.classList.add('block');
}

// Function for success
const success = (input,message) => {
	input.classList.add('inputSuccess');
	// It is more preferable to use textContent, since it always inserts text. Also, I can recommend investigating the difference between innerHTML, innerText and textContent
	resultText.textContent = message;
	resultText.classList.add('successText');
	resultText.classList.remove('errorText');
	errorImage.classList.remove('block');
	errorImage.classList.add('none');
}

// Function to validate the form
const validateForm = event => {
	event.preventDefault();

	let emailInput = document.getElementById("form__email");
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
//Notice that in your functions you declared in each one "document.getElementById('id_element')"
//Note that you can declare it outside once and that is enough.

const resultText = document.getElementById("form-container__result");
const errorImage = document.getElementById('form__errorImage');

document.getElementById("content__form-container").addEventListener("submit", validateForm);

//* Some fixes have been made to your code, you developed the logic well. Congratulations on completing the challenge, never stop learning!