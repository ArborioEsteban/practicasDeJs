/**2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. */

let cadena = prompt("Ingrese el texto para analizar");
mayOmin(cadena);
function mayOmin(cadena){
        if(cadena === cadena.toLowerCase()){
            alert("Cadena en Minusculas");

        } else if(cadena === cadena.toUpperCase()){
            alert("Cadena en Mayusculas");
        }else{
            alert("Cadena Mixta");
        }
}
