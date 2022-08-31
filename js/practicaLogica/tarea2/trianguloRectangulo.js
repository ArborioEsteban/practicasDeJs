
/*Ingresar tres valores positivos, indicar si son lados de un triángulo rectángulo (3 lados
iguales). Presentar por pantalla el mensaje correspondiente.*/

const ladoA= Number(prompt("Ingrese lado A"));
const ladoB= Number(prompt("Ingrese lado B"));
const ladoC= Number(prompt("Ingrese lado C"));

if(ladoA === ladoB && ladoA ===ladoC && ladoB === ladoC){
    document.write("Es un triangulo rectangulo");
}else{
    document.write("NO Es un triangulo rectangulo");
}