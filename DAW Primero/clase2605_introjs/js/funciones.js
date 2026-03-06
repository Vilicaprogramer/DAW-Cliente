//FUNCIONES -> Bloque de código que solo se ejecuta cuando es llamado
//var y let

//FUNCIONES SIN PARAMETROS

function saludo(){
    console.log("Hola mundo");
}

//saludo();

//FUNCIONES CON PARAMETROS
function operacion(num1,num2){
    let resultado = num1 + num2;
    console.log("Resultado:",resultado);
}



//FUNCIONES CON RETURN Y SIN PARAMETROS

function retorno1(){
    let numero = 5;
    return numero;
}



//FUNCIONES CON RETURN Y CON PARAMETROS

function retorno2(numero){
    return numero;
}

console.log(retorno2(20));


function testScope(){
    if(true){
        var x = 10;
        let y = 20;
    }
    
    console.log(x); // x = 10
    console.log(y); // y = ReferenceError y no esta definido


}


