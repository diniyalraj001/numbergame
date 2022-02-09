function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin@gmail.com" && password == "user")
    {
        window.location.href="welcome.html";
    }
    else{
        alert("login failed , Enter correct username or password !!")            }

}