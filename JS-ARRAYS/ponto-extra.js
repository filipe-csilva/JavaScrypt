const notas = [10, 9, 8, 7, 6];

const notasAtuliazadas = notas.map( nota => nota == 10 ? nota : nota + 1);

console.log(notasAtuliazadas)