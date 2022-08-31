/**
 * 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……

 */

const numero = Number(prompt("Ingrese un numero del 1 al 50"));
if(numero >=1 && numero<=50){
    for(let i=1 ; i <= numero ; i++){
        
        for(let j=1 ; j<=i ;j++){
            document.write(j);
        }
        if(i!=0){
            document.write(`<br/>`);
        }
    }
}else{
    document.write("No Ingresaste un numero entre 1 y 50"); 
}