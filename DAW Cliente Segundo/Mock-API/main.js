import { getAll,create, update, remove, getFiltrados, bulkCreate, bulkRemove } from "./apiService.js";

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

async function front_bulkCreate() {
    limpieza();
    try {
        log("Creando 5 tareas en paralelo...");
        const items = [
            {titulo: "Paralelo 2", completada: false},
            {titulo: "Paralelo 1", completada: true},
            {titulo: "Paralelo 3", completada: false},
            {titulo: "Paralelo 4", completada: true},
            {titulo: "Paralelo 5", completada: false}
        ];
        const resultado = await bulkCreate(items);
        log("Exitos: " + resultado.exitos + " - Fallos: " + resultado.fallos);
        await delay(5000);
    } catch(error){
        log("Error: " + error.message)
    }  
}

async function front_bulkDelete() {
    limpieza();
    try {
        log("Borrando 5 tareas en paralelo...");
        const ids = [
            "CjVFXBUG25c",
            "kwc_uw67UAk",
            "zAsHe7eFPhs",
            "eHZGZWmdIjU",
            "QjEoQhfQFWg"
        ];
        const resultado = await bulkRemove(ids);
        log("Exitos: " + resultado.exitos + " - Fallos: " + resultado.fallos);
        await delay(5000);
    } catch(error){
        log("Error: " + error.message)
    }
}

document.querySelector("#btnEjecutar").addEventListener("click", lanzarFase3);

document.querySelector("#btnLimpiar").addEventListener("click", limpieza);

document.querySelector("#btnBulkCreate").addEventListener("click", front_bulkCreate);

document.querySelector("#btnBulkDelete").addEventListener("click", front_bulkDelete);