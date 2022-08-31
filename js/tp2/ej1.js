while(true){
    const edad = prompt("Ingrese la edad");

    if(edad === null) break;

    if(Number(edad) >= 18){
        console.log("Puede manejar");
    }else if(Number(edad)<18 && Number(edad)>=0){
        console.log("No puede manejar");
    }else{
        console.log("numero no valido");
    }
}