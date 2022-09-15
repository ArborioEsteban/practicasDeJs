/**2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
 */

let ciudades = [];

while(true){
    let ciudad = prompt("Ingrese una ciudad");
    if(ciudad != null){
    ciudades.push(ciudad);
    }else if(ciudad === null){
        console.log(ciudades);
        break;
    }
}

console.log(ciudades);
console.log("La longitud del arreglo es de: " + ciudades.length);

// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
document.write(`<ul>
<li>Elemento 1er posicion: ${cities[0]} </li>
<li>Elemento 3er posicion: ${cities[2]} </li>
<li>Elemento ultima posicion: ${cities[cities.length - 1]}  </li>
</ul>`);

//tarea punto 3 y 4