const userName=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const confirmPassword=document.getElementById("confirmPassword");
const form=document.getElementById("registrationForm");
const register=document.getElementById("register");
 const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

function validateUserName(){
    if(userName.value.trim()===""){
     usernameError.innerText="please enter user name";
     return false;
    }
    else{
        usernameError.innerText="";
        return true;
    }
}
function validateEmail(){
    let pattern=/^[A-Za-z0-9._]+@[a-zA-z0-9._]+\.[a-zA-z]{2,}$/;
    if(!pattern.test(email.value)){
        emailError.innerText="please enter valid mail";
        return false;
    }
    else{
        emailError.innerText="";
        return true;
    }
}
function validatePassword(){
    let ptype=/^[a-zA-Z0-9@*!$%^&]+$/
    if(password.length<6||!ptype.test(password.value)){
        passwordError.innerText="please re check the password such that it satisfies the constraints";
        return false;
    }
    else{
        passwordError.innerText="";
        return true;
    }
}
function validateConfirmPassword(){
    if(confirmPassword.value.trim()!=password.value.trim()){
        confirmPasswordError.innerText="please re enter";
        return false;
    }
    else{
        confirmPasswordError.innerText="";
        return true;
    }
}
userName.addEventListener("input",validateUserName);
email.addEventListener("input",validateEmail);
password.addEventListener("input",validatePassword);
confirmPassword.addEventListener("input",validateConfirmPassword);
form.addEventListener("submit",function (e){
    e.preventDefault();
    const isValid=validateUserName()&&validateEmail()&&validatePassword()&&validateConfirmPassword();
    if(isValid){
        register.innerText="submmitted succesfully";
    }
    else{
        register.innerText="";
    }
});