const login=document.getElementById("login-form")
login.addEventListener("submit", function(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    alert("username:" + username + "\npassword:"+password)
});