import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  constructor() { }

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
    console.log(this.newProduct)
    console.log(this.form.value);
    // this.clearForm()
  }

  clearForm() {
    this.form.reset()
  }
}
