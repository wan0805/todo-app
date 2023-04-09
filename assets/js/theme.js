const button = document.querySelector("#button");
const body = document.querySelector("body");


function toChangeTheme(){
    body.classList.toggle("theme-dark");
}

button.addEventListener("click", toChangeTheme)