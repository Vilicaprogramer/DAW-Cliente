function suma1(){
    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);

    let suma = num1 + num2;

    console.log("La suma de",num1,"y",num2,"es:",suma);

}

function suma2(){ //MIRAR LO DEL ALERT
    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);

    let suma = num1 + num2;

    alert("La suma de "+num1+" y "+num2+" es: "+suma);

}


function suma3(){
    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);

    let suma = num1 + num2;

    document.getElementById("resultado").innerHTML = suma;
}

function funconprompt(){
    let num1 = parseInt(prompt("Introduzca un numero"));
    let num2 = parseInt(prompt("Introduzca otro numero"));

    let suma = num1 + num2;

    document.getElementById("resultado").innerHTML = suma;
}

funconprompt();