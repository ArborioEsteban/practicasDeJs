const numero1= Number(prompt("Ingrese un numero"));

if(numero1 % 2 === 0 || numero1 % 3 === 0 || numero1 % 5 === 0 || numero1 % 7 === 0 ){
    console.log("Es divisible por 2 3 5 o 7");
}else{
    console.log("No Es divisible por 2 3 5 ni 7 ");
}