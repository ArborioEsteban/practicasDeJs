// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
const numero1= Number(prompt("Ingrese numero 1"));
const numero2= Number(prompt("Ingrese numero2"));
const numero3= Number(prompt("Ingrese numero3"));

if((numero1 > numero2) && (numero1 > numero3) ){
    console.log("el mayor es " +  numero1);
}else if((numero2 > numero3) && (numero2 > numero1)){
    console.log("el mayor es " + numero2);    
}else if((numero3 > numero2) && (numero3 > numero1)){
    console.log("el mayor es " +  numero3);
}else{
    console.log("son iguales");
}
