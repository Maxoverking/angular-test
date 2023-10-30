import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {


  constructor(
    public productService: ProductService,
    public modalService: ModalService

  ) { }

  title = 'Angular app'
  // products: IProduct[] = data;
  // products: IProduct[] = [];
  // products$: Observable<IProduct[]>;
  loading = false;
  filtered = ''




  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productService.getAllProduct().pipe(
    //   tap(() => this.loading = false)
    // )
    this.productService.getAllProduct().subscribe(() => {
      // this.products = product;
      this.loading = false
      // console.log("🚀  product:", product);
    })

  }

  onFilteredChange(value: string) {
    console.log('filtered:', value);
  }
}
