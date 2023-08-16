import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myShoppingCart: Product[] = [];
  public totalShoppingCart = 0;
  private myCart = new BehaviorSubject<Product[]>([]);
  public myCart$ = this.myCart.asObservable();

  public addProduct(product: Product): void {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }

  getShoppingCart(): Product[] {
    return this.myShoppingCart;
  }

  getTotal(): number {
    return this.totalShoppingCart = this.myShoppingCart.reduce((sum, product) => sum + product.price, 0);
  }
}
