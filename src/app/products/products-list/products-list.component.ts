import { Component, inject } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { BehaviorSubject, Observable, concatMap, scan, takeUntil } from 'rxjs';
import { Product } from 'src/app/Model/Product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  disableButton = false
  productService = inject(ProductServiceService);
  products$ = new Observable<Product[]>();
  numberElements$ = new BehaviorSubject<number>(0);

  constructor() {
    this.products$ = this.numberElements$.pipe(
      concatMap((skip) => this.productService.getProducts(12, skip)),
      scan((previous, res)=> {
        return [...previous, ...res]
      })
    );    
  }
  
  loadMore() {
    const nextPage = this.numberElements$.value + 12;
    if (nextPage <= 100) this.numberElements$.next(nextPage);
    else {
      this.numberElements$.complete();
      this.disableButton = true
    }
  }
}
