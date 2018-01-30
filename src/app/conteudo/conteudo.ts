import { Disciplina } from "../disciplina/disciplina";

export class Conteudo {
    id: number;
    nome: string;
    descricao: string;
    extensao: string;
    link: string;
    disciplina: Disciplina;

    constructor () {
        this.disciplina = new Disciplina();
    }
}