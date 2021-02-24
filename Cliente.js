export class Cliente{
    get cpf(){ //somente leitura, nao tem como modificar diretamente
        
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
        this._senha=this.senha;
    }
    autenticar(){
        return true;
    }
}