const arrProdutos = require('./ListaLivros')

function menorValor(arrProdutos, posicaoInicial){
    
    let maisBarato = maisCaro = posicaoInicial;
        
    for(let atual = posicaoInicial; atual < arrProdutos.length; atual++){
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
            maisBarato = atual;
        }
        // if(livros[atual].preco > livros[maisCaro].preco){
        //     maisCaro = atual;
        // }
    }
    return maisBarato;
};

module.exports = menorValor;


//console.log(`O livro mais barato custa ${livros[maisBarato].preco} e o titulo é ${livros[maisBarato].titulo}`);
//console.log(`O livro mais caro custa ${livros[maisCaro].preco} e o titulo é ${livros[maisCaro].titulo}`);