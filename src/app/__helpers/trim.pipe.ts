import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim',
  standalone: true
})
export class TrimPipe implements PipeTransform {

  transform(value: string, limit: number = 100, trail: string = '...'): string {
    if (!value) {
      return '';
    }
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}
