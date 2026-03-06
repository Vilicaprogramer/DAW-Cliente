//VARIABLES -> let + nombre

//Variables numéricas
let numero = 20;
console.log("Numero:",numero);

//Variables de texto

let palabra = "palabras";
console.log("Palabra:",palabra);

//Variables boleanas

let boleana = true;
console.log("Boleana",boleana);

//Variables de tipo Array

let colores = ["Rojo","Amarillo","Azul"];
console.log("Colores",colores[1]);

//Variables de tipo objeto (Object: propiedad:valor)

let zumo = {
    ingrediente1:"Fresa",
    ingrediente2:"Naranja",
    ingrediente3:"Platano"
};

console.log("Zumo",zumo.ingrediente1);

//Variables DOM: Modelo de Objetos del documento
/*El DOM se la estructura de objetos que genera el navegador cuando se carga un documento y se pueda
alterar mediante JS para cambiar dinamicamente los contenidos y aspecto de la pagina */

let caja = document.querySelector("#caja");
console.log("Caja",caja);

caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "red";

let cajas = document.querySelectorAll(".cajas");
console.log("cajas",cajas);