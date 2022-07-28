// passes fields
const pw = document.querySelector('#password');
const pw2 = document.querySelector('#password2');
// error massage
const pwError = document.querySelector('#password-error');
const pw2Error = document.querySelector('#password2-error');

// displays error message to let user know that the password is too short, or needs digits etc.
pw.addEventListener('input', (event) => {
    // skip if password metches [pattern] attribute
    if(pw.validity.patternMismatch) {
        let current = pw.value;
        const rCapital = /[A-Z]/;
        const rLower = /[a-z]/;
        const rNumber = /[0-9]/;
        let result = '';
        if(!rCapital.test(current)) {
            result += 'Missing capital letter<br>';
        }
        if(!rLower.test(current)) {
            result += 'Missing lowercase letter<br>';
        }
        if(!rNumber.test(current)) {
            result += 'Missing number<br>';
        }
        if(current.length < 8) {
            result += 'Password is too short';
        }
        pwError.innerHTML = result;
        pw.classList.add('error');
    } else {
        // clear error message ([pattern] attribute check)
        pwError.innerHTML = '';
        pw.classList.remove('error');
    }
})

pw2.addEventListener('input', (event) => {
    if(pw2.value !== pw.value) {
        pw2Error.innerHTML = 'Passwords do not match';
        pw2.classList.add('error');
    } else {
        pw2Error.innerHTML = '';
        pw2.classList.remove('error');
    }
})