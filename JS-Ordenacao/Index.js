const livros = require('./ListaLivros')


let maisBarato = maisCaro = 0;

for(let atual = 0; atual < livros.length; atual++){
    if(livros[atual].preco < livros[maisBarato].preco){
        maisBarato = atual;
    }
    if(livros[atual].preco > livros[maisCaro].preco){
        maisCaro = atual;
    }
}
console.log(`O livro mais barato custa ${livros[maisBarato].preco} e o titulo é ${livros[maisBarato].titulo}`);
console.log(`O livro mais caro custa ${livros[maisCaro].preco} e o titulo é ${livros[maisCaro].titulo}`);