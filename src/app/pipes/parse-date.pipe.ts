import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'parseDate'
})
export class ParseDatePipe implements PipeTransform {

  transform(value: any) {
    return moment(new Date(value)).format("DD.MM.YYYY");
  }

}
