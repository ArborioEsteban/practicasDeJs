/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/

let suma = 0;
while(true){
    const numero = prompt("Ingrese un numero");
    if(!isNaN(numero) && numero!=""){
        let numDeSuma = Number(numero);
        suma = suma + numDeSuma;
    }else{
        alert("No, crack! solo numeros!");
    }
    if(numero === null){
        alert("La suma es " + suma);
        break;}
}