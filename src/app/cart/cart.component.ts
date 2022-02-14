import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductService} from "../shared/product.service";
import {Product} from "../shared/interfaces";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartProducts: Product[] = [];
  totalPrice: number = 0;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.cartProducts = this.productService.cartProduct;
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.totalPrice += +this.cartProducts[i].price;
      console.log(this.cartProducts[i].price);
    }
  }
}
