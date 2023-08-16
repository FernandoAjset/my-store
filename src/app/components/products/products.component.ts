import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public totalShoppingCart = 0;
  public products: Product[] = [];
  public myShoppingCart: Product[] = [];
  public today: Date = new Date();
  public date: Date = new Date(2021,1,21);

  constructor(
    private _storeService: StoreService,
    private _productsService: ProductsService
  ) {
    this.myShoppingCart = this._storeService.getShoppingCart();
  }

  public onAddToShoppingCart(product: Product) {
    this._storeService.addProduct(product);
    this.totalShoppingCart = this._storeService.getTotal();
  }

  ngOnInit(): void {
    this._productsService.getAllProductos()
      .subscribe(products => {
        this.products = products;
      });
  }
}
