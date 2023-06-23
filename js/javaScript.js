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
        document.querySelectorAll(".menu")[0].style.color="#f05d07";
        icon_hamburguer = true;
    } 

    enlaces_header.classList.toggle("MenuOpen");

});





const wrapper  = document.querySelector('.wrapper');
const loginlink  = document.querySelector('.login_link');
const resgitrolink  = document.querySelector('.registre_link');
const btnpopup  = document.getElementById('buttonbtn');
const iconclose  = document.querySelector('.icon_close');


resgitrolink.addEventListener('click',()=> {
wrapper.classList.add('active');
});

loginlink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
    });

    btnpopup.addEventListener('click',()=> {
        wrapper.classList.add('active_btn');
    });

    iconclose.addEventListener('click',()=> {
        wrapper.classList.remove('active_btn');
    });
