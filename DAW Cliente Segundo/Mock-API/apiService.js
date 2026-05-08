const API = "http://localhost:2026/tareas";

async function manejarRespuesta(res) {
    if(!res.ok) {
        throw new Error("HTTP Error" + res.status);
    }
    return await res.json();
}

async function request(url, opciones = {}) {
    try {
        const res = await fetch(url, opciones);
        if(!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        if(opciones.method === "DELETE") return true;
        return await res.json();
    } catch (error) {
        if(error.message.startsWith("HTTP")) throw error;
        throw new Error("No se puede conectar con el servidor");
    }
}

export async function getAll() {
    try {
        const res = await fetch(API);
        return await res.json();   
    } catch (error) {
        if(error.message.startsWith("HTTP")) throw error;
        throw new Error("No se puede conectar con el servidor");
    }
}

export async function create(tarea) {
    try {
        const res = await fetch(API, {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(tarea)
        });
    return await res.json();
    } catch (error) {
        if(error.message.startsWith("HTTP")) throw error;
        throw new Error("No se puede conectar con el servidor");
    }
}

export async function update(id, cambios) {
    try {
        const res = await fetch($`{API}/${id}`, {
            method:"PUT",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(cambios)
        });
        return await res.json();
    } catch (error) {
        if(error.message.startsWith("HTTP")) throw error;
        throw new Error("No se puede conectar con el servidor");
    }
}

export async function remove(id) {
    try {
        const res = await fetch(`${API}/${id}`, {
            method:"DELETE"
        });
        return await res.json();
    } catch (error) {
        if(error.message.startsWith("HTTP")) throw error;
        throw new Error("No se puede conectar con el servidor");
    }
}

export async function getFiltrados(filtros) {
    try {
        const params = new URLSearchParams();

        if (filtros.ordenar) {
            params.set("_sort", filtros.ordenar);
        }

        const url = params.toString() ? `${API}?${params.toString()}` : API;
        const res = await fetch(url);
        return await res.json();
    } catch (error) {
        if(error.message.startsWith("HTTP")) throw error;
        throw new Error("No se puede conectar con el servidor");
    }
}

export async function bulkCreate(items) {
    const inicio = Date.now();
    const resultados = await Promise.allSettled(
        items.map(item => create(item))
    );
    console.log(`Lote creado en ${Date.now()-inicio} ms`);
    return {
        exitos: resultados.filter(r => r.status === "fulfilled").length,
        fallos: resultados.filter(r => r.status === "rejected").length
    };
}

export async function bulkRemove(ids) {
    const resultados = await Promise.allSettled(
        ids.map(id => remove(id))
    );
    return {
        exitos: resultados.filter(r => r.status === "fulfilled").length,
        fallos: resultados.filter(r => r.status === "rejected").length
    };
}