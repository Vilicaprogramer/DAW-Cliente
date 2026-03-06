/*EVENTOS DESDE EL DOM*/

let recuadro = document.querySelector("#recuadro");
/*
function cambiarColor(){
    recuadro.style.background = "red";
}*/

/*EVENTOS DESDE JAVASCRIPT*/

let boton = document.querySelector("#boton");

boton.addEventListener("click",moverCaja);

function moverCaja(){
    recuadro.style.width = "500px";
    recuadro.style.transition = "1s";
}
