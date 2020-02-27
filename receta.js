import Ingrediente from "./ingrediente.js"
export default class Receta {
    /**
     * 
     * @param {string} nombre 
     * @param {string} autor 
     * @param {Ingrediente[]} ingredientes 
     */
    constructor(nombre, autor, ingredientes){
        this.nombre = nombre
        this.autor = autor
        this.ingredientes = ingredientes
    }

    getNumeroIngredientes(){
        return `${this.ingredientes.length}`
    }

    getCosto(){
        let costo = 0
        this.ingredientes.forEach((ingrediente, i) =>{
            costo = costo + ingrediente.costo
        })
        return `${costo}`
    }

    imprimirEnConsola(){
        console.log(`${this.nombre}
        Autor: ${this.autor}
        Ingredientes:`)
        this.ingredientes.forEach((ingrediente, i) =>{
            console.log(`${i + 1}. ${ingrediente.getDescripcion()}`)})
            console.log(` Costo total: $${this.getCosto()}`)
    }
}