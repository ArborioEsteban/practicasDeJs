/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/
const numero = Number(prompt("Ingrese un numero del 1 al 50"));
if(numero >=1 && numero<=50){
    for(let i=numero;i >=1 ;i--){
        for(let j=i ; j>=1 ;j--){
            document.write(i);
        }
        if(i!=0){
            document.write(`<br/>`);
        }
    }
}else{
    document.write("No Ingresaste un numero entre 1 y 50"); 
}