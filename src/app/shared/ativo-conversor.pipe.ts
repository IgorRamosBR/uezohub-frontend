import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ativoConversor'
})
export class AtivoConversorPipe implements PipeTransform {

  transform(value: boolean): string {
    if (value === true) {
      return 'Sim';
  } else {
      return 'Não';
  }
  }

}
