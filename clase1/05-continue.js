// while

let contador = 0;

while(contador < 3) {
    console.log(contador);
    contador++;
}

console.log("fin del ciclo while");

// do while

let conteo = 0;
do {
    console.log(conteo);
    conteo++;
} while (conteo < 3);
console.log("fin del ciclo do while");

// for

for(let contando = 0; contando < 3; contando++) {
    console.log(contando)
    
}
console.log("fin del ciclo for");

// break
for(let contando = 0; contando <= 10; contando++){
    if (contando % 2 == 0) {
        console.log(contando);
        break;
    }
}
console.log("termina el ciclo al encotrar el primer de los pares");

// continue

for(let contando = 0; contando <= 10; contando++) {
    if (contando % 2 !== 0) {
        continue;
    }
    console.log(contando);
}
console.log('termina el ciclo')