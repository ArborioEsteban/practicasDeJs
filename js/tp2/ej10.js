/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/

const filas = Number(prompt("Ingrese el numero de filas"));
const columnas = Number(prompt("Ingrese el numero de Columnas"));

//declaramos variable tracker q vendria a ser el numero de celdas q tendra la tabla para poder dibujarla despues
let tracker = filas * columnas;

// i representaria las filas de la tabla
for(let i=0 ; i<filas ; i++){
    // cada vez q haga vuelva a analizar las filas hacemos el salto de linea
    document.write(`</br>`);
    // j representaria las columnas
    for(let j = 0; j<columnas ; j++){
        document.write(" | " + tracker + "  | ");
        // al ir restando aqui vamos dibujando en forma decreciente
        tracker--;
    }
}