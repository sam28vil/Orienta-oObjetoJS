// ser autenticavel dignifica ter um metodo autenticar
export class SistemaAutenticacao{
    static login(autenticavel,senha){ //static = eles são chamados na própria classe
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }
    static ehAutenticavel(autenticavel){ //nao precisa criar uma instacia para chamar esse método
        return "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function;
    }
}
//ducky type- para linguagens fracamente tipadas, só interessa a propriedade que vc quer usar
