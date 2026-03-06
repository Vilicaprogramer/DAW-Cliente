let tiempo = document.querySelector("#tiempo");
let segundos = 0;

// 1s = 1000ms
/*
SET INTERVAL (FUNCIÓN, TIEMPO (ms))
*/

let intervalo = setInterval(function(){
    segundos++;
    tiempo.innerHTML = segundos;
}, 1000);

/* SET TIMEOUT (FUNCIÓN, TIEMPO (ms))
*/

setTimeout(function(){
    //clearInterval(intervalo);
    alert("Se acabo el tiempo");
},5000);
