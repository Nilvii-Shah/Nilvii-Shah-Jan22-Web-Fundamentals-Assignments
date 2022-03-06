function check_Password(){
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirm-password");
    if((password.value !== confirmPassword.value)){
        password.value = ""
        password.placeholder = "Password missmatch!"
        document.getElementById("password").classList.add("red")
        password.style.color = "red";
        confirmPassword.placeholder = "Password missmatch!";
        document.getElementById("confirm-password").classList.add("red")
        confirmPassword.value = ""
    }
}