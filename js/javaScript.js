let valuedisplay = document.querySelectorAll(".numero");
let interval = 1500;


valuedisplay.forEach((valuedisplay) => {
let starvalue = 0;
let endvalue = parseInt(valuedisplay.getAttribute
("data-val"));
let duration = Math.floor(interval / endvalue);
let counter = setInterval(function(){
    starvalue += 1;
    valuedisplay.textContent = starvalue;
    if(starvalue == endvalue){
        clearInterval(counter);
    }
} , duration);


});


let enlaces_header = document.querySelectorAll(".navegation")[0];
let icon_hamburguer = true;


document.querySelectorAll(".menu")[0].addEventListener("click", function(){
    if(icon_hamburguer){
        document.querySelectorAll(".menu")[0].style.color="#fff";
        icon_hamburguer = false;

    }else{
        document.querySelectorAll(".menu")[0].style.color="#000";
        icon_hamburguer = true;
    } 

    enlaces_header.classList.toggle("MenuOpen");

});