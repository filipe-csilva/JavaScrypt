const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// notas.forEach(function(nota){
//     somaDasNotas += notas;
// })

notas.forEach(notas => {
    somaDasNotas += notas;
})

let media = somaDasNotas/notas.length;

console.log(media);