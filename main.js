let name = prompt('What is your name?')

if (name == null || name == '') {
	alert('You have not entered a name!')
} else {
	alert(`Hello, ${name}! How are you?`)
}

