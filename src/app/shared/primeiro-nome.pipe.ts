import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeiroNome'
})
export class PrimeiroNomePipe implements PipeTransform {

  transform(nome: string): string {
    const index = nome.indexOf(' ');
    if ( index === -1 ) {
      return nome;
    }
    return nome.substring(0, index);
  }

}
