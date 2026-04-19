// ─────────────────────────────────────────────
// EJERCICIO 4 — Promise.all: peticiones en paralelo
// ─────────────────────────────────────────────
// Tenéis 3 funciones que simulan peticiones lentas:
//    obtenerNombre()  → tarda 1 segundo
//    obtenerEdad()    → tarda 1 segundo
//    obtenerEmail()   → tarda 1 segundo
//
// 1. Primero ejecutadlas en secuencia con await
//    → medid cuánto tarda en total (debería ser ~3s)
//
// 2. Luego ejecutadlas en paralelo con Promise.all
//    → medid cuánto tarda (debería ser ~1s)
//
// Pista: Date.now() antes y después para medir tiempo
// ─────────────────────────────────────────────

function obtenerNombre() {
    return new Promise(resolve => setTimeout(() => resolve("Ana"), 1000));
}

function obtenerEdad() {
    return new Promise(resolve => setTimeout(() => resolve(25), 1000));
}

function obtenerEmail() {
    return new Promise(resolve => setTimeout(() => resolve("ana@example.com"), 1000));
}

async function Secuencia() {
    const inicio = Date.now();
    const nombre = await obtenerNombre();
    const edad = await obtenerEdad();
    const email = await obtenerEmail();
    console.log("Secuencia: ", {nombre, edad, email});   
    console.log("Tiempo de secuencia: ", Date.now() - inicio, " ms");
}

async function Paralelo() {
    const inicio = Date.now();
    const [nombre, edad, email] = await Promise.all([
        obtenerNombre(), obtenerEdad(), obtenerEmail()
    ]);
    console.log("Paralelo: ", {nombre, edad, email});    
    console.log("Tiempo de paralelo: ", Date.now() - inicio, " ms");
}

Secuencia();
Paralelo();