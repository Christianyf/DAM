import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unidad'
})
export class UnidadPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value + ' Cb Kpa';
  }

}
