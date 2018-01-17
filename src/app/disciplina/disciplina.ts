import { Curso } from './../cursos/curso';
export class Disciplina {
    id: number;
    nome: string;
    codigo: string;
    ativo: boolean;
    curso: Curso;

    constructor() {
        this.curso = new Curso();
    }
}
