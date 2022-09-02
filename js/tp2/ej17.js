//  Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.


const texto = prompt("Ingrese el texto");

for(let i=0 ; i < texto.length ; i++){
    if(texto.charAt(i)==="a" || texto.charAt(i)==="e" || texto.charAt(i)==="i" || texto.charAt(i)==="o" || texto.charAt(i)==="u"){
        console.log("la primera vocal está en la posicion: " + i);
        break;
    }
}
