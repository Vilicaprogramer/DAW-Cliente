async function cargarBiblioteca() {
    const res = await fetch('biblioteca.xml');
    const texto = await res.text();

    const parser = new DOMParser();
    const xml = parser.parseFromString(texto, 'application/xml');

    //Mostrar en consola
    const nodos = xml.getElementsByTagName('libro');
    console.log(nodos);
    console.log(nodos.length);

    //Creo hijo DOM para añadir
    const libros = Array.from(nodos);
    let html = "";
    for (let i=0; i < libros.length; i++) {
        const libro = libros[i];
        const titulo = libro.querySelector('titulo').textContent;
        const autor = libro.querySelector('autor').textContent;
        const anio = libro.querySelector('anio').textContent;
        const genero = libro.getAttribute('genero');
        const disponible = libro.getAttribute('disponible');

        html += '<div class="card"><h3>' + titulo + '</h3><p>' + autor + ' - ' + anio + ' - ' + genero + '</p></div>';
    }

    document.getElementById('lista').innerHTML = html;
}




async function cargarBiblioteca2() {
    const res = await fetch('biblioteca.xml');
    const texto = await res.text();

    const parser = new DOMParser();
    const xml = parser.parseFromString(texto, 'application/xml');

    // Cambiar de XML a Json
    function XMLToJson(xmlDoc) {
        return Array.from(xmlDoc.getElementsByTagName('libro')).map(n => ({
            id: n.getAttribute('id'),
            genero: n.getAttribute('genero'),
            disponible: n.getAttribute('disponible') === 'true',
            titulo: n.querySelector('titulo').textContent,
            autor: n.querySelector('autor').textContent,
            anio: Number(n.querySelector('anio').textContent),
            paginas: Number(n.querySelector('paginas').textContent)
        }));
    }

    function pintaTarjetas(filtro) {
        const libros = XMLToJson(xml);
        console.log(libros);
        let html = "";
        if (filtro === 'todos') {
            for (let i=0; i < libros.length; i++) {
                const libro = libros[i];
                let clase;
                if (libro.disponible) {
                    clase = "-disponible";
                } else {
                    clase = "-no-disponible";
                }
                html += '<div class="card' + clase + '"><h3>' + libro.titulo + '</h3><p>' + libro.autor + ' - ' + libro.anio + ' - ' + libro.genero + '</p></div>';
            }
        } else {
            for (let i=0; i < libros.length; i++) {
                const libro = libros[i];
                if (libro.genero === filtro) {
                    let clase;
                    if (libro.disponible) {
                        clase = "-disponible";
                    } else {
                        clase = "-no-disponible";
                    }
                    html += '<div class="card' + clase + '"><h3>' + libro.titulo + '</h3><p>' + libro.autor + ' - ' + libro.anio + ' - ' + libro.genero + '</p></div>';
                }
            }
        }
        document.getElementById('lista').innerHTML = html;
    }

    const botones = document.querySelectorAll('.filtro');
    botones.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const filtro = e.target.getAttribute('name');
            pintaTarjetas(filtro);
        });
    });
    pintaTarjetas('todos')
}

cargarBiblioteca2();