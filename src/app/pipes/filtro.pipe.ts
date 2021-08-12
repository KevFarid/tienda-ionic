
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any[], text: any): any {
    
    return value.filter( item => {
      if( text === '' ){
        return item;
      }else{
          text = text.toLowerCase()
          return item.nombre.toLowerCase().includes( text )
      }
    })
    
  }

}