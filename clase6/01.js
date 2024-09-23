class Persona {
    constructor (nombre, apellido) {
        this._nombre = nombre
        this._apellido = apellido
    }

    get nombre() {
        return this._nombre
    }

    set nombre(nombre) {
        this._nombre = nombre
    }

    get apellido() {
        return this._apellido
    }

    set nombre(apellido) {
        this._apellido = apellido
    }
0
} 

class Empleado extends Persona {
    constructor(departamento, nombre, apellido) {
        super(nombre, apellido)
        this._departamento = departamento
    }

    get departamento() {
        return this._departamento
    }

    set departamento(departamento) {
        this._departamento = departamento
    }
}

let persona1 = new Persona('joaquin', "peralta")

console.log(persona1)
console.log(persona1.nombre) // muestra el nombre y no el apellido ya que los atributos son privados y se obtienen con un metodo get
console.log(persona1.apellido)

persona1.nombre = "pedro"
console.log(persona1)



let persona2 = new Persona('claudio', "alavarez")

console.log(persona2)
console.log(persona2.nombre) // muestra el nombre y no el apellido ya que los atributos son privados y se obtienen con un metodo get
console.log(persona2.apellido)

persona2.nombre = "juancarlo"
console.log(persona2)

let empleado1 = new Empleado("merkenting", "pedro", "perez")

console.log(empleado1)