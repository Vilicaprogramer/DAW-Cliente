// Crea un programa que convierta temperaturas entre Celsius
// y Fahrenheit.
//
// Requisitos:
//   1. Declara una constante con un valor en Celsius (ej: 25).
//   2. Calcula Fahrenheit con: F = (C * 9/5) + 32
//   3. Muestra por consola: "25C equivale a 77F"
//   4. Haz la conversion inversa: de Fahrenheit a Celsius.
//      Formula: C = (F - 32) * 5/9

const tempCelsius = 25;

function CelsiusToFahrenheit(temp) {
    return (temp * 9/5) + 32
}

function FahrenheiToCelsius(temp) {
    return (temp - 32) * 5/9
}

console.log(`${tempCelsius}C equivale a ${CelsiusToFahrenheit(tempCelsius)}F
y ${CelsiusToFahrenheit(tempCelsius)}F equivale a ${FahrenheiToCelsius(CelsiusToFahrenheit(tempCelsius))}C`)

// Clasifica a una persona segun su edad.
//
// Requisitos:
//   1. Declara una variable con la edad.
//   2. Usa if / else if / else para clasificar:
//      - Bebe:        0 - 2
//      - Nino:        3 - 12
//      - Adolescente: 13 - 17
//      - Adulto:      18 - 64
//      - Senior:      65+
//   3. Si la edad es negativa o > 120, muestra error.
//   4. Muestra la clasificacion por consola.
let edad = 3;
function clasificadorEdad(edad) {
    switch (true) {
        case edad <= 2 && edad > 0:
            console.log(`Bebe`);
            break;
        case edad <= 12:
            console.log(`Nino`);
            break;
        case edad <= 17:
            console.log(`Adolescente`);
            break;
        case edad <= 64:
            console.log(`Adulto`);
            break;
        case edad > 64 && edad < 120:
            console.log(`Senior`);
            break;
        default:
            console.log(`La  edad introducida no es válida.`)
    }
}

clasificadorEdad(edad)

// Gestiona las notas de un estudiante y calcula estadisticas.
//
// Requisitos:
//   1. Crea un array con al menos 8 notas (0-10).
//   2. Calcula la media aritmetica usando .reduce().
//   3. Obten la nota maxima con Math.max(...array).
//   4. Obten la nota minima con Math.min(...array).
//   5. Cuenta cuantas notas son >= 5 usando .filter().
//   6. Clasifica el rendimiento segun la media:
//      Suspenso (<5), Aprobado (5-6.99),
//      Notable (7-8.99), Sobresaliente (9-10).
//   7. Muestra un resumen completo por consola.

const notas = [4.3, 5.6, 7.4, 5 ,3 ,9]
const sumaNotas = notas.reduce((acc, nota) => acc + nota, 0);
const mediaNotas = sumaNotas  / notas.lengt;
console.log(`La media de las notas es ${mediaNotas.toFixed(2)}`);
const notaMaxima = Math.max(...notas);
console.log(`La nota máxima de las notas es ${notaMaxima.toFixed(2)}`);
const notaMinima = Math.min(...notas);
console.log(`La nota máxima de las notas es ${notaMinima.toFixed(2)}`);
const notasMayorCinco = notas.filter((nota) => nota >= 5);
console.log(`Tienes ${notasMayorCinco.length} aprovadas`);
function resultadoFinal(media) {
    switch(true){
        case media < 5 && media > 0:
            return `Suspendido`;
        case media < 6.99:
            return `Aprobado`;
        case media < 8.99:
            return `Notable`;
        case media < 10:
            return `Sobresalient`;
        default:
            return `La nota introducida no es válida`
    }
}

console.log(resultadoFinal(mediaNotas))


// Requisitos:
//   1. Crea un array vacio para las tareas.
//   2. Cada tarea: { id, titulo, estado: 'pendiente' }
//   3. Funcion agregarTarea(titulo):
//      - Crea el objeto y lo anade con push().
//   4. Funcion completarTarea(id):
//      - Usa .find() para buscar la tarea.
//      - Cambia su estado a 'completada'.
//   5. Funcion eliminarTarea(id):
//      - Usa .filter() para eliminarla del array.
//   6. Funcion listarPorEstado(estado):
//      - Filtra y muestra las tareas de ese estado.
//   7. Funcion resumen():
//      - Muestra cuantas pendientes y completadas hay.
//
// **

let tareas = [];
let nextId = 1;

function agregarTarea(titulo) {
  let tarea = {nextId, titulo, estado: "pendiente"};
  nextId ++;
  tareas.push(...tarea);
}

function completarTarea(id) {
  let tarea = tareas.find() 
}

function eliminarTarea(id) {
  // Tu codigo aqui...
}

function listarPorEstado(estado) {
  // Tu codigo aqui...
}

function resumen() {
  // Tu codigo aqui...
}