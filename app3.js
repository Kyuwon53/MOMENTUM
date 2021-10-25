const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const link = loginForm.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function onLoginBtnClick() {
    const username = loginInput.value;
    console.log(username);

}

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username);
    greeting.innerText = '';
    // greeting.innerText = "Hello! " + username;
    greeting.innerText = `Hello! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
    console.log(username);
}

function handlerLinkClick(event){
    event.preventDefault();
    console.log(event);
    alert("clicked!!!!");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handlerLinkClick);
