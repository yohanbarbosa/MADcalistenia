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