const ladoA= Number(prompt("Ingrese la base"));
const ladoB= Number(prompt("Ingrese la altura"));
let perimetro = 2*(ladoA+ladoB);
let superficie = ladoA*ladoB;
document.write(`El perimetro del rectangulo es: ${perimetro} <br>`);
document.write(` La superficie del rectangulo es: ${superficie}`);
 