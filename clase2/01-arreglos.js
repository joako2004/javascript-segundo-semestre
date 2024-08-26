let autos = new Array('ferrary', 'renault', 'BMW');

const Autos = ('ferrary', 'renault', 'BMW');
console.log(autos);
console.log(autos[0]);

for (let i = 0; i < Autos.length; i++) {
    console.log(autos[i])
}

autos.push('audi')
console.log(Autos);

autos[autos.length] = 'porche'
console.log(Autos);

autos[6] = 'bugatti'
console.log(Autos);

console.log(Array.isArray(autos))

console.log(autos instanceof Array)