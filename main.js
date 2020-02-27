import Cantidad from "./cantidad.js"
import Ingrediente from "./ingrediente.js"
import Receta from "./receta.js"

class Main {
    constructor(){
        this.cantidad = new Cantidad (100, "gramos")
        this.ingrediente = new Ingrediente ("pan", "2 rebanadas", 20)
        this.receta = new Receta ("Sandwich de jamon", "Eduardo Lopez", [new Ingrediente(new Cantidad(2, "rebanadas"), "de pan", 20), new Ingrediente(new Cantidad(1, "rebanada"), "de jamon", 5)])
    }

    probarCantidad(){
        console.log(this.cantidad.getDescripcion())
    }
    
    probarIngrediente(){
        console.log(this.ingrediente.getDescripcion())
    }
    
    probarReceta(){
        console.log(this.receta.imprimirEnConsola())
    }
}

let app = new Main
app.probarCantidad()
app.probarIngrediente()
app.probarReceta()