export default class Ingrediente {
    /**
     * 
     * @param {string} nombre 
     * @param {string} cantidad 
     * @param {number} costo 
     */
    constructor(nombre, cantidad, costo){
        this.ingrediente = nombre
        this.cantidad = cantidad
        this.costo = costo
    }
    getDescripcion(){
        return `Ingrediente: ${this.cantidad} de ${this.ingrediente} a $${this.costo}`
    }
}