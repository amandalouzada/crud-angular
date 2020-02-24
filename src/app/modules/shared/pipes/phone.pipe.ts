import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string | number): string {

    let phone = '';
    if (typeof value == 'number'){
      phone = value.toString();
    }

    if (typeof value == 'string'){
      phone = value
    }
  
    return `+${phone.substr(0, 2)} (${phone.substr(2, 2)}) ${phone.substr(4, 5)} ${phone.substr(9, 4)}`;
  }

}
