let valuedisplay = document.querySelectorAll('.numero');
let intervalo = 5000;


valuedisplay.forEach((valuedisplay) =>{
let starvalue = 0;
let endvalue = parseInt(valuedisplay.getAttribute("data-val"));
let duracion = Math.floor(intervalo / endvalue);
let contador = setInterval(function(){
starvalue += 1;
valuedisplay.textContent = starvalue;
if()
});
});