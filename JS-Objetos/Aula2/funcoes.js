const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550","1156456301"],
    saldo: 200.00,
    efetuaPagamento: function (valor) {
        if(valor > this.saldo){
            console.log ("Saldo Isuficiente");
        }
        else
        {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`)
        }
    }
};

cliente.efetuaPagamento(500);