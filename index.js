var today = new Date();
var bg = document.getElementById("dark-mode-background");
var words = document.getElementsByClassName("dark-mode-word");
var nav = document.getElementById("dark-mode-nav");


if(today.getHours() > 18){
    bg.style.backgroundColor = "#404040";
    for(let word of words){
        word.style.color = "#FFFFFF";
    }
    nav.classList.remove("navbar-light");
    nav.classList.remove("bg-light")
    nav.classList.add("bg-dark")
    nav.classList.add("navbar-dark");
}

