import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    return value.split(' ').map(item => {
      if (item) {
        item = item.charAt(0).toUpperCase() + item.slice(1);
      }
      return item;
    }).join(' ');
  }
}
