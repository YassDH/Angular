import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  http = inject(HttpClient)
  constructor() { }

  getProducts(take: number, skip: number = 0): Observable<Product[]> {
    const url = `https://dummyjson.com/products?skip=${skip}&limit=${take}`;
    return this.http.get<{products: Product[]}>(url).pipe(
      map((res)=> res.products)
    );
  }
}
