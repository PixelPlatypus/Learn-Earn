var close = false;
let mobile_menu = document.getElementById("mobile_menu");
let cont_menu = document.getElementById("cont_menu");


// let winWidth = window.screen.width;
var w = window.innerWidth;

function toogle(){
    if(close == true){
        mobile_menu.classList.remove("hidden");
        cont_menu.classList.remove("hidden");
        console.log("shown");
        close = false;
    }else if (close == false){
        mobile_menu.classList.add("hidden");
        cont_menu.classList.add("hidden");
        console.log("hidden");
        close = true;
    }

}