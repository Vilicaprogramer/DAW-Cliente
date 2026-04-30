const productos = [
    {id:1, nombre:'Teclado', precio:20, categoria:"perifericos"},
        {id:2, nombre:'Monitor', precio:200, categoria:"pantallas"},
            {id:3, nombre:'Ratón', precio:50, categoria:"perifericos"},
];
let indice = 0;
function crearTarjeta(producto) {
    const tarjeta = document.createElement('div');
    tarjeta.setAttribute("class", "card");

    const nombre = document.createElement('h3');
    nombre.textContent = producto.nombre;
    const precio = document.createElement('p');
    nombre.textContent = producto.precio;

    const boton = document.createElement('button');
    boton.textContent = "Agregar al carrito";
    boton.setAttribute("class", "btn");
    boton.addEventListener("click", () => {
        boton.classList.toggle("activo");
        if (boton.classList.contains("activo")) {
            boton.textContent = "En Carrito";
        } else {
            boton.textContent = "Agregar al carrito";
        }
    });
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(boton);
    return tarjeta;
}

document.querySelector('#btnAgregar').addEventListener('click', () => {
    if (indice >= productos.length) return;
    const tarjeta_unica = crearTarjeta(productos[indice]);
    document.querySelector('#catalogo').appendChild(tarjeta_unica);
    indice++;
});

document.querySelector('#btnEliminar').addEventListener('click', () => {
    if (indice <= 0) return;
    document.querySelector('#catalogo').removeChild(document.querySelector('#catalogo').lastChild);
    indice--;
});

const botones = document.querySelectorAll('.filtro');
for (let i = 0; i < productos.length; i++) {
    botones[i].addEventListener('click', () => {

        document.querySelector("#catalogo").innerHTML = "";
        for (let j = 0; j < productos.length; j++) {
            if (botones[i].dataset.categoria === "todos") {
                indice = 0;
                const tarjeta_unica = crearTarjeta(productos[j]);
                document.querySelector("#catalogo").appendChild(tarjeta_unica);
                indice++
            } else if (productos[j].categoria === botones[i].dataset.categoria) {
                indice = 0;
                document.querySelector("#catalogo").appendChild(crearTarjeta(productos[j]))
                indice++;
            }
        }
            
    });
}
 

