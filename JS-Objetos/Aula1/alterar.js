const pessoa = {
    nome: "Luma",
    Profissao: "Engenheira"
};

console.log (pessoa.telefone);

pessoa.telefone = "11 22233344"

console.log (pessoa.telefone);

pessoa.nome = "Luma Silva";

console.log (pessoa);

const novaPesssoa = {
    nome: "Pedro",
};

pessoa = novaPesssoa;

console.log (pessoa)