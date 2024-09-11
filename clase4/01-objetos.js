let x = 10 // variable tipo primitivo
console.log(x.leng);

// crear objetos
let persona = {
    nombre: "joaquin",
    apellido: 'peralta',
    email: 'joakoperaltacorbellini2004@gmail.com',
    edad: 19,

    nombreCompleto: function() {
        return this.nombre + " " + this.apellido // metodo que devuelve el nombre completode la persona
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);

console.log(persona.nombreCompleto());

let persona2 = new Object();

persona2.nombre = 'juan';
persona2.direccion = "salada 1234";
persona2.telefono = 2604111111;

console.log(persona2);

console.log(persona['apellido']) // acceder como su fuera un arreglo

// recorrer el objeto con un for in

for(propiedad in persona) {
    console.log(propiedad)
    console.log(persona[propiedad])
}

persona.apellido = 'perez';

console.log(persona)

// formas de imprimir el objeto

console.log(persona.nombre + " " + persona.apellido)

for (nombrePropiedad in persona){
    console.log(persona[nombrePropiedad])
}

let personaArray = Object.values(persona)
console.log(personaArray)

let personaString = JSON.stringify(persona)
console.log(personaString)