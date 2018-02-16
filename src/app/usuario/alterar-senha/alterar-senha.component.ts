import { ErrorHandlerService } from './../../core/error-handler.service';
import { UsuarioService } from './../usuario.service';
import { ToastyService } from 'ng2-toasty';
import { Component, OnInit } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent implements OnInit {

  senhaAtual='';
  novaSenha='';

  constructor(
    private toastyService: ToastyService,
    private usuarioService: UsuarioService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit() {
  }

  salvar(f: FormGroupDirective) {
    this.usuarioService.verificaSenha(this.senhaAtual)
      .then(response => {
        console.log(response);
        if(response) {
          this.alterarSenha(f);
        } else {
          this.toastyService.error('Senha atual incorreta.');
        }
      })
      .catch(error => this.errorHandlerService.handle(error))
  }

  alterarSenha(f: FormGroupDirective) {
    this.usuarioService.alterarSenha(this.novaSenha)
      .then(response => {
        this.toastyService.success('Senha alterada com sucesso.');
        this.novo(f);
      })
      .catch(error => this.errorHandlerService.handle(error))
  }

  novo(f: FormGroupDirective) {
    this.senhaAtual = '';
    this.novaSenha = '';
    if (f) {
      f.resetForm();
    }
  }
}
