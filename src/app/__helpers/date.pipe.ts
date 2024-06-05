import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
  name: 'date',
  standalone: true
})
export class DatePipe implements PipeTransform {

  transform(value: string | Date): string {
    const date = new Date(value);
    return format(date, 'MMMM do, yyyy');
  }

}
