import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "./interfaces";

@Pipe({
  name: 'corting'
})
export class CortingPipe implements PipeTransform {

  transform(products: Product[], type = ''): any {
    return products.filter(prod => {
      return prod.type === type;
    });
  }

}
