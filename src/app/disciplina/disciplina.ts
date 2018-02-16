import { Curso } from './../cursos/curso';
import { Usuario } from '../usuario/usuario';

export class Disciplina {
    id: number;
    nome: string;
    codigo: string;
    ativo: boolean;
    curso: Curso;
    usuario: Usuario;

    constructor() {
        this.curso = new Curso();
        this.usuario = new Usuario();
    }
}
