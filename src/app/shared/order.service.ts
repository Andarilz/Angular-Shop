import { Injectable } from '@angular/core';
import {FBresponse, Product} from "./interfaces";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  type = 'Phone';

  constructor(private http: HttpClient) {}

  create(order) {
    return this.http.post(`${environment.URL}/orders.json`, order)
        .pipe(map( (res: FBresponse) => {
              return {
                ...order,
                id: res.name,
                date: new Date(order.date)
              };
            }
        ));
  }
  //
  // getAll() {
  //   return this.http.get(`${environment.URL}/products.json`)
  //       .pipe(map(res => {
  //         return Object.keys(res)
  //             .map(key => ({
  //               ...res[key],
  //               id: key,
  //               data: new Date(res[key].date)
  //             }));
  //       }));
  // }
  //
  //
  // remove(id) {
  //   return this.http.delete(`${environment.URL}/products/${id}.json`);
  // }


}
