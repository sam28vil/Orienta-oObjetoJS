import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    constructor(cliente, agencia) { //criar e inicializar um objeto criado a partir de uma classe.
        super(0,cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    //sobreescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}