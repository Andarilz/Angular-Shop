import {Pipe, PipeTransform} from "@angular/core";
import {Product} from "./interfaces";


@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    transform(products: Product[], prodName = ''): any {
        if (!prodName.trim()) {
            return products;
        }


        return products.filter(prod => {
            return prod.title.toLowerCase().includes(prodName.toLowerCase());
        });
    }
}
