import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 15639842203);
gerente.cadastrarSenha("1234");

const cliente= new Cliente("Lais", 14589963257,"456");

const gerenteestaLogado=SistemaAutenticacao.login(diretor,"123456");
const diretorestaLogado=SistemaAutenticacao.login(gerente,"1234");

const clienteestaLogado=SistemaAutenticacao.login(cliente,"456")

console.log(diretorestaLogado,gerenteestaLogado,clienteestaLogado)

