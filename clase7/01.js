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

    set apellido(apellido) {
        this._apellido = apellido
    }

    nombreCompleto() {
        return this._nombre + " " + this._apellido
    }
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

    // sobreescribir el metodo de la clase padre dentro de la clase hija 
    nombreCompleto() {
        return super.nombreCompleto() + ' ' + this.departamento // heredar por medio de super el metodo que devuelve el nombre mas el apellido
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

let empleado1 = new Empleado("markenting", "pedro", "perez")

console.log(empleado1)

console.log(empleado1.nombreCompleto())