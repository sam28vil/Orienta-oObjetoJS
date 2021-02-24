//classe para ser somente herdada(classe abstrata)
export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta){
           throw new Error ("Você não deveria instanciar um objeto do tipo conta  diretamente, pois essa é uma classe abstrata");

        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        
       
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    //metodo abstrato
    sacar(valor) {
        throw new Error("o metodo sacar da conta e abstrato");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        this._saldo += valor;
    }

    tranferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}