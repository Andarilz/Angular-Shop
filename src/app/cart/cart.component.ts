import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductService} from "../shared/product.service";
import {Product} from "../shared/interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {OrderService} from "../shared/order.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartProducts: Product[] = [];
  totalPrice = 0;
  form: FormGroup;
  submitted = false;

  constructor(private productService: ProductService, private router: Router, private orderService: OrderService) { }

  ngOnInit() {
    this.cartProducts = this.productService.cartProduct;
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.totalPrice += +this.cartProducts[i].price;
    }
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('+7', [Validators.required, Validators.minLength(9)]),
      address: new FormControl('', [Validators.required]),
      payment: new FormControl('Cash', [Validators.required]),
    });
  }


  submit() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;

    const order = {
      name: this.form.value.name,
      phone: this.form.value.phone,
      address: this.form.value.address,
      payment: this.form.value.payment,
      order: this.cartProducts,
      date: new Date()
    };

    this.orderService.create(order).subscribe(() => {
      this.form.reset();
      this.submitted = false;
    });
  }

  delete(product) {
    this.totalPrice -= +product.price;
    this.cartProducts.splice(this.cartProducts.indexOf(product), 1);
  }
}
