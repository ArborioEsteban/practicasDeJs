/**2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
 */



while(true){
    const nota = prompt("Ingrese la nota del alumno");
    if(nota === null) break;
    if(nota < 0 || nota > 10){
        alert("No es una nota valida");
    }

    let notaEnNumber =  Number(nota);
    if(notaEnNumber <= 2){
        alert("Muy deficiente");
    }else if(notaEnNumber >=3 && notaEnNumber <= 4){
        alert("Insuficiente");
    }else if(notaEnNumber >=5 && notaEnNumber <= 6){
        alert("Suficiente");
    }else if(notaEnNumber === 7){
        alert("Bien");
    }else if(notaEnNumber >= 8 && notaEnNumber <=9){
        alert("Notable");
    }else if(notaEnNumber === 10){
        alert("Sobresaliente");
    }
}