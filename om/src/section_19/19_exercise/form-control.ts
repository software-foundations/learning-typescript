import isEmail from 'validator/lib/isEmail'

const SHOW_ERROR_MESSAGES = 'show-error-message'

// These types are to assert that these fields are not empty in the form
const form = document.querySelector('.form') as HTMLFormElement
const username = document.querySelector('.username') as HTMLInputElement
const email = document.querySelector('.email') as HTMLInputElement
const password = document.querySelector('.password') as HTMLInputElement
const password2 = document.querySelector('.password2') as HTMLInputElement

// TypeScript mades inference
// event: Event
form.addEventListener('submit', function (event: Event) {
	event.preventDefault()
	hideErrorMessages(this)
	checkForEmptyFields(username, email, password, password2)
	checkEmail(email)
	checkEqualPasswords(password, password2)
	if(shouldSendForm(this))
		console.log('Submitted')
})

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
	inputs.forEach(input => {
		if (!input.value)
			showErrorMessage(input, "This field cannot be empty")
	})
}

function checkEmail(input: HTMLInputElement): void {
	if (!isEmail(input.value))
		showErrorMessage(input, "Invalid Email")
}

function checkEqualPasswords(password: HTMLInputElement, password2: HTMLInputElement) {
	if (password.value !== password2.value){
		showErrorMessage(password, "Passwords do not match")
		showErrorMessage(password2, "Passwords do not match")
	}
}

function hideErrorMessages(form: HTMLFormElement): void {
	form.querySelectorAll('.' + SHOW_ERROR_MESSAGES)
		.forEach(item => item.classList.remove(SHOW_ERROR_MESSAGES))
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
	const formFields = input.parentElement as HTMLDivElement
	const errorMessage = formFields
		.querySelector('.error-message') as HTMLSpanElement

	errorMessage.innerText = msg
	formFields.classList.add(SHOW_ERROR_MESSAGES)
}

function shouldSendForm(form: HTMLFormElement): boolean {
	let send = true
	form.querySelectorAll('.' + SHOW_ERROR_MESSAGES)
		.forEach(element => send = false)
	return send
}

showErrorMessage(username, 'MENSAGEM')
hideErrorMessages(form)