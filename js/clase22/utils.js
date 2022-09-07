// funcion factorial
export function factorial(numero){
    let res=1;
    for(let i=numero; i>0 ; i--){
        res = res * i;
    }
    return res;
}


// funcion primera letra de un string en mayuscula
export const primeraLetraMayuscula = (cadena) => {
    let primeraLetra = cadena.charAt(0);
    primeraLetra = primeraLetra.toUpperCase();
    let cadenaEnMinuscula = cadena.toLowerCase();
    cadenaEnMinuscula.slice(1);
    const cadenaResultante = primeraLetra + cadenaEnMinuscula;
    return cadenaResultante;


}

//  validar un email



