let persona = {
    nombre: "joaquin",
    apellido: "peralta",
    email: "joako2004@gmail.com",
    edad: 19,
    idioma: "español",

    nombreCompleto: function() {
        return this.nombre + ' ' + this.apellido
    }, 

    get nombreEdad() {
        return "nombre " + this.nombre + " edad: " + this.edad
    },

    set lang(lang){
        this.idioma = lang.toUpperCase()
    },

    get lang() {
        return this.idioma.toUpperCase()
    },

}

console.log(persona.nombreEdad)
persona.lang = "english"
console.log(persona.lang)

function Persona3(nombre, apellido, email) {

    this.nombre = nombre
    this.apellido = apellido
    this.email = email

    this.nombreCompleto = function() {
        return this.nombre + " " + this.apellido
    }

}

let padre = new Persona3("leo", "lopez", "leolopez@gmail.com")
console.log(padre)
console.log(padre.nombreCompleto())

// formas de crear objetos

let miObjeto = new Object()
let miObjeto2 = {} // forma recomendada

let miCadena = new String("hola")
let miCadena2 = "hola" // forma recomendada

let miNumero = new Number(1)
let miNumero2 = 1 // forma recomendada

let miBoolean = new Boolean(false)
let miBoolean2 = false // forma recomendada

let miArreglo = new Array()
let miArreglo2 = [] // forma recomendada

let miFuncion = new function(){}
let miFuncion2 = function(){} // forma recomendada

// prototype

Persona3.prototype.telefono = '2601233445'
console.log(padre.telefono)

// call

let persona4 = {
    nombre: "juan",
    apellido: "perez",

    nombreCompleto2: function() {
        return this.nombre + " " + this.apellido
    }
}

let persona5 = {
    nombre: "juan",
    apellido: "perez",
}