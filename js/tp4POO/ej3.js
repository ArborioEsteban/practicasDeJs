/**3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
 */

class rectangulos {
    constructor(alto,ancho){
        this.alto = alto,
        this.ancho = ancho;
    }

    get getLados(){
        console.log(`alto: ${this.alto} y ancho: ${this.ancho}`);        
    }

    // mostrar(){
    //     console.log(`alto: ${this.alto} y ancho: ${this.ancho}`);
    // }

    area(){
        let area = this.alto * this.ancho;
        return area;

    }
    perimetro(){
        let perimetro = 2 * (this.alto + this.ancho) ;
        return perimetro;
    }

    set setAlto(altoUser){
        this.alto = altoUser;        
    }
    set setAncho(anchoUser){
        this.ancho = anchoUser;        
    }

}
let rec = new rectangulos(5,10);
rec.getLados;
console.log("al area es: " + rec.area());
console.log("al perimetro es: " + rec.perimetro());
rec.setAlto = 15;
rec.getLados;