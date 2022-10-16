const alunos = ['Joao', 'Juliana', 'Caio', 'Ana'];

const mediasDosAlunos = [10,7,9,6];

let listaDeNotasEAlunos = [alunos,mediasDosAlunos];

for(let i = 0; i < alunos.length; i++){
    console.log(`${listaDeNotasEAlunos[0][i]}, sua media é ${listaDeNotasEAlunos[1][i]}`);
}
