import { getAll,create, update, remove, getFiltrados } from "./apiService.js";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


function log(mensaje) {
    const logArea = document.querySelector("#log");
    const linea = document.createElement("p");
    linea.textContent = mensaje;
    logArea.appendChild(linea);
}

function limpieza(){
    document.querySelector("#log").innerHTML = "";
}

async function lanzarFase3() {
    limpieza();
    try {
        log("Listar todos");
        await delay(5000);

        const inicial = await getAll();
        log("Se obtuvieron: " + inicial.length + " tareas");
        inicial.forEach(t => log("Tarea id: " + t.id + " y el titulo: " + t.titulo));
        await delay(5000);

        log("Crear nuevo");
        await delay(5000);

        const nueva = await create({
            titulo: "Tarea desde el navegador",
            completada: false
        });
        log("Creada con titulo: " + nueva.titulo);
        await delay(5000);

        log("Editamos una");
        await delay(5000);

        const editada = await update(nueva.id, { titulo: "Editada", completada: true });
        log("Actualizada con nuevo titulo: " + editada.titulo);
        await delay(5000);

        /* log("Borrar");
        await delay(5000);

        await remove(nueva.id);
        log("Borrada");
        await delay(5000); */

        const ordenadas = await getFiltrados({ ordenar: "titulo" });
        log("Tareas ordenadas: ");
        ordenadas.forEach(t => log(" " + t.titulo));
        log("FIN - Todo completado");
    } catch(error){
        log("Error: " + error.message)
    }
}

document.querySelector("#btnEjecutar").addEventListener("click", lanzarFase3);

document.querySelector("#btnLimpiar").addEventListener("click", limpieza);