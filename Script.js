
let userInfo = document.querySelector("#user_info");
let userDome = document.querySelector("#user");
let RegisterLogin = document.querySelector("#RegisterLogin");
let logOutBtn = document.querySelector("#log_out");


let username = localStorage.getItem("username");
if(username){
    RegisterLogin.remove()
    userInfo.style.display = "flex"
    userDome.innerHTML = localStorage.getItem('username');
}

logOutBtn.addEventListener('click', function(){
    localStorage.clear();
    setTimeout(()=> {
        window.location = "Register.html"
    ,1500})
})
