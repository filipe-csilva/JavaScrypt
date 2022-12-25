const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550","1156456301"],
};

cliente.enderecos = [{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
}];

// for(let chave in cliente){
//     console.log (chave);
// }

// for(let chave in cliente){
//     console.log (cliente[chave]);
// }

for(let chave in cliente){
    console.log (`A chave ${chave} tem o valor ${cliente[chave]}`);
};