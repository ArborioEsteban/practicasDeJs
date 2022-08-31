// punto 3 y 5 si terminan el 7 u 8
// tarea para hacer hasta el ejercicio 10
// Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let cadenaFinal="";
do{
    const texto = prompt("Ingrese texto");
    if(texto === null){
        alert(cadenaFinal);
        break    
    }
    cadenaFinal = cadenaFinal + texto + " - ";
}while(true) 