export default class Cantidad {
    /**
     * 
     * @param {number} valor 
     * @param {string} unidad 
     */
    constructor(valor, unidad){
        this.valor = valor
        this.unidad = unidad
        this.cantidad = `${this.valor} ${this.unidad}`
    }

    getDescripcion(){
        return `Cantidad: ${this.valor} ${this.unidad}.`
    }
}