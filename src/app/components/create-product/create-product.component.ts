import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private modalService: ModalService
  ) { }

  form = new FormGroup({
    newProduct: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })
  ngOnInit(): void {

  }

  get newProduct() {
    return this.form.controls.newProduct as FormControl
  }

  submitCreateProduct() {
    // console.log(this.newProduct)
    console.log(this.form.value);
    this.productService.createProduct(
      {
        title: this.form.value.newProduct as string,
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
          rate: 11.4,
          count: 5
        }
      }
    ).subscribe(() => {
      this.modalService.close()
    })
    // this.clearForm()
  }

  clearForm() {
    this.form.reset()
  }
}
