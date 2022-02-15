import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {OrderService} from "../../shared/order.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {

  constructor(private orderService: OrderService) { }

  orders = [];
  pSub: Subscription;
  rSub: Subscription;
  orderFind: string;

  ngOnInit() {
    this.pSub = this.orderService.getAll().subscribe(orders => {
      this.orders = orders;
    });
  }

  ngOnDestroy(): void {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
    if (this.rSub) {
      this.rSub.unsubscribe();
    }
  }
  delete(id) {
    this.rSub = this.orderService.remove(id).subscribe(() => {
      this.orders = this.orders.filter(prod => prod.id !== id);
    });
  }

}
