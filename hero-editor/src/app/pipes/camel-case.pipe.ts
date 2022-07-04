import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(str: string): string {  
      
    return str.split(' ').map(word => {

      let arrFromWord = word.split('');

      for (let i = 0; i < arrFromWord.length; i += 2 ) {
        arrFromWord[i] = arrFromWord[i][0].toUpperCase() + arrFromWord[i].substr(1);
      }
      return arrFromWord.join('')

    }).join(' ');

  }

}
