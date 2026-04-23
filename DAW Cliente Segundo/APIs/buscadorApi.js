// ─────────────────────────────────────────────
// EJERCICIO 1 — Buscador de usuarios
// ─────────────────────────────────────────────
// Construir un buscador en consola que:
//
// 1. Cargue UNA sola vez todos los usuarios de la API
//      → https://jsonplaceholder.typicode.com/users
//    Guárdalos en una variable en memoria (no refetch por búsqueda).
//
// 2. mostrar(usuarios)
//    Imprima tabla: nombre | email | ciudad (address.city).
//    Incluir al final "Total: N".
//
// 3. buscar(texto)
//    Filtre en memoria por nombre (case-insensitive, contiene).
//
// 4. init()
//    Cargue los usuarios, los muestre, y programe dos búsquedas con
//    setTimeout para demostrar el filtrado.
//
// Manejo de errores: si falla el fetch, mostrar el error y usar [].
// ─────────────────────────────────────────────

const URL_USERS = "https://jsonplaceholder.typicode.com/users";

let todosUsuarios = [];

async function obtenerUsuarios() {
    // TODO: fetch + res.ok + return json (try/catch devolviendo [])
    try {
        const res = await fetch(URL_USERS);
        if(!(await res).ok){
            throw Error("HTTP Error", res.status);
        }
        return (await res).json()
    } catch (error) {
        console.error("Error al cargar usuarios ", error.message);
        return [];
    }
}

function mostrar(usuarios) {
    // TODO: forEach imprimiendo nombre | email | ciudad
    console.log("Entrar en mostrar Usuarios");
    usuarios.forEach(({name, email, address}) => {
        console.log("Nombre: " + name + " Email: " + email + " Dirección: " + address.ciudad)
    });
    console.log("Total usuarios>: ", usuarios.length);
    // Prueba para HTML
    /* const tarjeta = document.createElement("div");
    tarjeta.setAttribute("class", "tarjeta");
    const nombre = document.createElement("h3");
    nombre.textContent = name;
    const email = document.createElement("h4");
    email.textContent = email;
    const direccion = document.createElement("p");
    direccion.textContent = address;
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(email);
    tarjeta.appendChild(direccion); */
}

function buscar(texto) {
    // TODO: filter case-insensitive sobre todosUsuarios + mostrar()
    const textoABuscar = texto.toLowerCase();
    const filtrados = todosUsuarios.filter(u => u.nombre.toLowerCase().includes(textoABuscar));
    console.log("Numero de usuarios filtrados: ", filtrados.length);
    mostrar(filtrados);
}

async function init() {
    // TODO: await obtenerUsuarios(), mostrar, programar buscar() con setTimeout
    const todosUsuarios = await obtenerUsuarios();
    mostrar(todosUsuarios);
    setTimeout(() => buscar("Cle"), 2000);
    setTimeout(() => buscar("Kur"), 3000);
}

init();