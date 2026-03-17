// **
// EJERCICIO 6 - Contador Interactivo
// Tema: Eventos y DOM
// **
//
// Crea una pagina HTML con un contador que el usuario pueda
// incrementar, decrementar y resetear.
//
// Requisitos:
//   1. Crea un archivo .html con este HTML base:
//
//      <div id="contador-app">
//        <h1 id="numero">0</h1>
//        <button id="btn-dec">-</button>
//        <button id="btn-reset">Reset</button>
//        <button id="btn-inc">+</button>
//      </div>
//
//   2. Selecciona los elementos con getElementById().
//   3. Anade addEventListener('click', ...) a cada boton.
//   4. El contador NO debe bajar de 0.
//   5. Si el valor es 0 -> color rojo. Si > 0 -> color verde.
//   6. Usa textContent para actualizar el numero.
//   7. Usa classList.add / classList.remove para los colores.
//
// Pista: Guarda el valor en una variable JS. Cada clic
//        actualiza la variable Y el DOM.
// **

let contador = 0;
let num = document.getElementById("numero");
let dec = document.getElementById("btn-dec");
let reset = document.getElementById("btn-reset");
let inc = document.getElementById("btn-inc");

function modificarContador (contador){
    if (contador === 0) { 
        num.style.color = "red";
    } else {
        num.style.color = "green";
    }
    num.textContent = contador;
}

dec.addEventListener("click", function() {
    if(contador > 0){
        contador --;
        modificarContador(contador);
    }
}
)

inc.addEventListener("click", function() {
    contador ++;
    modificarContador(contador);})

reset.addEventListener("click", function() {
    contador = 0;
    modificarContador(contador);})