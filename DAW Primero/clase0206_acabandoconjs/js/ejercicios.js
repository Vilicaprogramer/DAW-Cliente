/*CREA UN EJERCICIO TRABAJANDO CON EVENTOS, EL CUAL
ME PERMITA CAMBIAR DE COLOR UN DIV DE AZUL A ROJO, PULSANDO UN BOTÓN
Y UNA VEZ SE CAMBIE DE COLOR, VOLVIENDO A PULSAR EL BOTÓN, VUELVA
A SU COLOR ORIGINAL (AZUL)
*/

let caja = document.querySelector("#caja");
let boton = document.querySelector("#boton");

boton.addEventListener("click",cambiarColor);

function cambiarColor(){
    if(caja.style.backgroundColor === "blue"){
        caja.style.backgroundColor = "red";
    }else{
        caja.style.backgroundColor = "blue";
    }
}