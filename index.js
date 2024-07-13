alert('hola')

// save reference for each element
let form = document.getElementById('form')
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let password2 = document.getElementById('password2')





// no submit
form.addEventListener('submit', e => {
    e.preventDefault() // prevent submit / no submit'

    validateInputs()
})






// error
let setError = (element, message) => {
    let inputControl = element.parentElement
    let errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

//success
let setSuccess = element => {
    let inputControl = element.parentElement
    let errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = ''
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

//email valid
let isValidEmail = email => {
    let re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase())

}







// removes whitespace from both sides of a string
let validateInputs = () =>{
    let usernameValue = username.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    let password2Value = password2.value.trim()


    if (usernameValue === '') {
        setError(username, 'Username is required')
    } else {
        setSuccess(username)
    }


    if (emailValue === '') {
        setError(email, 'Email is required')
    } else if (!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address')
    } else {
        setSuccess(email)
    }


    if (passwordValue === '') {
        setError(password, 'Password is required')
    } else if (password.value.length < 8) {
        setError(password, 'Password must be at least 8 character')
    } else {
        setSuccess(password)
    }


    if (password2Value === '') {
        setError(password2, 'Please confirm your password')
    } else if (password2.value.length !== password) {
        setError(password2, 'Password does not match')
    } else {
        setSuccess(password2)
    }

}














