import { Disciplina } from "../disciplina/disciplina";
import { Usuario } from "../seguranca/usuario";

export class Conteudo {
    id: number;
    nome: string;
    descricao: string;
    extensao: string;
    link: string;
    disciplina: Disciplina;
    usuario: Usuario;

    constructor () {
        this.disciplina = new Disciplina();
        this.usuario = new Usuario();
    }
}