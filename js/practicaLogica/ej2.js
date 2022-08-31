const fahrenheit= Number(prompt("Ingrese la temperatura en grados Fahrenheit"));
let centigrados = (( (fahrenheit-32) * 5) / 9);
document.write(`La temperatura en grados centigrados es de:  ${centigrados}°`);