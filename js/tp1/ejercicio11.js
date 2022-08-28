//  Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

const numero1= Number(prompt("Ingrese un numero"));

if(numero1 % 2 === 0 || numero1 % 3 === 0 || numero1 % 5 === 0 || numero1 % 7 === 0 ){
    if(numero1 % 2 === 0){
        console.log(`${numero1} Es divisible por 2`);
        // control + alt + } = los bactickts
    }
    if(numero1 % 3 === 0){
        console.log(`${numero1} Es divisible por 3`);
    }
    if(numero1 % 5 === 0){
        console.log(`${numero1} Es divisible por 5`);
    }
    if(numero1 % 7 === 0){
        console.log(`${numero1} Es divisible por 7`);
    }
}else{
    console.log(`${numero1} NO Es divisible por 2,3,5 Ni 7`);
}