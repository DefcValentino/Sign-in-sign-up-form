
let signinBtn = document.getElementById('signinBtn');
let signupBtn = document.getElementById('signupBtn');
let namefield = document.getElementById('namefield');
let title = document.getElementById('title');

signinBtn.onclick = function() {
    namefield.style.maxHeight = '0';
    title.innerHTML = 'Sign in';
    signupBtn.classList.add('disable');
    signinBtn.classList.remove('disable');
}

signupBtn.onclick = function() {
    namefield.style.maxHeight = '60px';
    title.innerHTML = 'Sign up';
    signupBtn.classList.remove('disable');
    signinBtn.classList.add('disable');
}

///SUBMITTING FORM INPUTS
myForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    
    if(name.value == "" || password.value == "" || email.value == "") {
        alert('ensure you put a value in the fields');
    } else {
        //perform operation
        alert('This form has been succesfully submitted!');

        console.log(
            `This form has a name of ${name.value} an email of ${email.value}
        and password of ${password.value}` )

        name.value = "";
        email.value = "";
        password.value = "";
    };

});


