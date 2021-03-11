const passwordeyeField = document.querySelectorAll(".password-toggle");

passwordeyeField.forEach(eyes => {
    const passwordField = eyes.previousElementSibling
    eyes.addEventListener("click", togglePasswordField);
    function togglePasswordField(e){
        console.log("user")
        if (passwordField.type == "text"){
            passwordField.type = "password";
        eyes.src = "images/eye-slash.svg";
        }else{
            passwordField.type = "text";
        eyes.src = "images/eye.svg";
        }
        
    }
    
});
