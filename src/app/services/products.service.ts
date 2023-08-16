import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  getAllProductos(): Observable<Product[]> {
    return this._http.get<Product[]>(`${environment.urlApi}/products`);
  }
}
