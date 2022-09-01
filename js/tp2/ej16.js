// 16- Realiza un script que pida una cadena de texto y la devuelva al revés.
//  Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.


const texto = prompt("Ingrese el texto");
let contador = texto.length - 1;
let cadenaFinal="";
for(let i = contador ; i >= 0 ; i--){
    cadenaFinal = cadenaFinal + texto.charAt(i);
    // concat(texto.charAt(i));
}

console.log(cadenaFinal);