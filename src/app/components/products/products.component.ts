import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public products: Product[] = [
    {
      id: 1,
      name: 'Smartwatch',
      price: 200,
      image: './assets/eCommerce/1.png',
    },
    {
      id: 2,
      name: 'SmartPhone',
      price: 300,
      image: './assets/eCommerce/2.png',
    },
    {
      id: 1,
      name: 'Monitor',
      price: 320,
      image: './assets/eCommerce/3.png',
    },
  ];

  public myShoppingCart: Product[] = [];
  public totalShoppingCart: number = 0;

  public onAddToShoppingCart(product: Product) {
    this.myShoppingCart.push(product);
    this.totalShoppingCart = this.myShoppingCart.reduce((sum, product) => sum + product.price, 0);
  }
}
