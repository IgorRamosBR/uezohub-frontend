import { Curso } from "../cursos/curso";

export class Aluno {
    id: number;
    nome: string;
    matricula: string;
    email: string;
    senha: string;
    curso: Curso;

    constructor() {
        this.curso = new Curso()
    }
}