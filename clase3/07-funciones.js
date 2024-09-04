function miFuncion (a, b) {
    // console.log('sumamos ' + (a + b));
    return (a + b)
}

console.log(miFuncion(1, 4));

let resultado = miFuncion(7, 8);
console.log(resultado);

// funcion de tipo expresion
let x = function(a, b) {
    return a + b
};

res = x(6, 9);
console.log(res);

res2 = x;
console.log(res2(7, 1));

// funciones self y envoking (no se pueden reutilizar)

(function(a, b){
    console.log('ejecutando la funcion: ' + (a + b))
}) (9, 6);

console.log(typeof(miFuncion))

function miFuncionDos(a, b) {
    console.log(arguments);
    console.log(arguments.length);
}

miFuncionDos(3, 4);

// convertir la funcion a string

var miFuncionTexto = miFuncionDos.toString()
console.log(miFuncionTexto);

// funciones flecha

const sumaFuncionFlecha = (a, b)  => a + b;

resultado = sumaFuncionFlecha(4, 5);
console.log(resultado);

// argumentos y parametros:

// parametros: la lista de variables que se definen en la funcion
// argumentos: los valores que se pasan a la funcion cuando se llama, se asigna, etc

let sumar = function(a = 4, b = 8) {
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
    return a + b
}

res = sumar(4, 5);
console.log(res);