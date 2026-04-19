// ─────────────────────────────────────────────
// EJERCICIO 3 — Login con token que expira
// ─────────────────────────────────────────────
// Crea dos funciones:
//
// 1. login(usuario, password)
//    - Si usuario es "admin" y password es "1234"
//      → genera un token y lo guarda en una variable
//      → el token expira en 5 segundos (setTimeout)
//      → devuelve el token
//    - Si los datos son incorrectos → lanza un error
//
// 2. peticionProtegida(token)
//    - Si el token sigue activo → devuelve "Datos obtenidos"
//    - Si el token ha expirado → lanza "Sesión expirada"
//
// Prueba:
//    login → peticionProtegida inmediata (funciona)
//    login → esperar 6 segundos → peticionProtegida (falla)
//
// Todo con async/await y try/catch
// ─────────────────────────────────────────────

let tokenActivo = null;

async function login(usuario, password) {
    if (usuario === "admin" && password === "1234"){
        tokenActivo = "TOKEN_ABC123";
        setTimeout(() => {
            tokenActivo = null;
            console.log("Se ha expirado el token");
        }, 5000);
        return tokenActivo;
    }
    throw new Error("Credenciales incorrectas");
}

async function peticionProtegida(token) {
    if(token != tokenActivo) throw new Error("Sesión Expirada");
    return "Datos obtenidos";
}

async function main(){
    try{
        // Prueba 1 - login correcto
        const token = await login("admin", "1234");
        console.log("Login ok, Valor del token: ", token);
        const datos = await peticionProtegida(token);
        console.log(datos);

        // Prueba 2 - lespera 6 segundos, token expirado
        await new Promise(r => setTimeout(r, 6000));
        const datos2 = await peticionProtegida(token);
        console.log(datos2);
    }catch(error){
        console.log(error.message);
    }
}

main();