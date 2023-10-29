import { Component, OnInit } from '@angular/core';
import { IProduct } from "./models/product";
import { products as data } from './data/products'
import { ProductService } from './services/product.service';
import { Observable, tap } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private productsService: ProductService) {

  }

  title = 'Angular app'
  // products: IProduct[] = data;
  // products: IProduct[] = [];
  products$: Observable<IProduct[]>;
  loading = false;
  filtered = ''




  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productsService.getAllProduct().pipe(
      tap(() => this.loading = false)
    )
    // this.productsService.getAllProduct().subscribe((product) => {
    //   this.products = product;
    //   this.loading = false
    //   console.log("🚀  product:", product);
    // })

  }

  onFilteredChange(value: string) {
    console.log('filtered:', value);
  }
};
