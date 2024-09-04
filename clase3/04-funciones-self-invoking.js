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

