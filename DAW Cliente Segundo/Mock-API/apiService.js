const API = "http://localhost:2026/tareas";

export async function getAll() {
    const res = await fetch(API);
    return await res.json();   
}

export async function create(tarea) {
    const res = await fetch(API, {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify(tarea)
    });
    return await res.json();
}

export async function update(id, cambios) {
    const res = await fetch($`{API}/${id}`, {
        method:"PUT",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify(cambios)
    });
    return await res.json();
}

export async function remove(id) {
    const res = await fetch($`{API}/${id}`, {
        method:"DELETE"
    });
    return await res.json();
}

export async function getFiltrados(filtros) {
    const params = new URLSearchParams();

    if (filtros.ordenar) {
        params.set("_sort", filtros.ordenar);
    }

    const url = params.toString() ? `${API}?${params.toString()}` : API;
    const res = await fetch(url);
    return await res.json();
}