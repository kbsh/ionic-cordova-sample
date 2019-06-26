import { Pipe, PipeTransform } from '@angular/core';
import { Suggest } from '../models/suggest';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(suggests: Suggest[], input: string): Suggest[] {
    if (input.length === 0) {
      return suggests;
    }

    return suggests.filter(suggest => {
      return suggest.name.includes(input);
    });
  }

}
