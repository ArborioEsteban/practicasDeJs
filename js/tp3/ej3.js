/**3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
 */

let base = Number(prompt("Ingrese la base del triangulo"));
let altura = Number(prompt("Ingrese la altura del triangulo"));

function perimetro(a,b){
    let perimetro = 2 * (a + b);
    return perimetro;
}
alert(perimetro(base,altura));