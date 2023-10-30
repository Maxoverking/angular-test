import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({
  name: 'filteredProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(products: IProduct[], filter: string): IProduct[] {
    if (filter.length === 0) return products
    return products.filter(product =>
      product.title.toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase()));
  }

}
