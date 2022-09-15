/**4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

*/

class Productos{
    constructor(codigo,nombre,precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimeDatos(){
        console.log(`Codigo: ${this.codigo} <br> Nombre: ${this.nombre} <br> Precio: $ ${this.precio}`);   
    }
}

let monitor = new Productos(101,"Monitor Samsung", 45000);
let mouse = new Productos(102,"Mouse Redragon",8000);
let placa = new Productos(103,"Placa 3080",500000);

let items = [];
items.push(monitor);
items.push(mouse);
items.push(placa);
items