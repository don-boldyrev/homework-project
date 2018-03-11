import { Pipe, PipeTransform } from '@angular/core';
import {Place} from '../../places';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(value: Place[], category?: string): Place[] {
    return value.filter((place: Place) => {
      return place.type === category;
    });
  }

}
