import { Product } from './../product';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-body',
  templateUrl: './cart-body.component.html',
  styleUrls: ['./cart-body.component.css']
})
export class CartBodyComponent implements OnInit {
  @Input() products: Product[];
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onRemoveProduct = new EventEmitter();
  @Output() onChangeQuantity = new EventEmitter();

  removeProduct(id: number) {
    this.onRemoveProduct.emit(id);
  }

  inputQuantity(id: number, quantityNumber: HTMLInputElement) {
    // console.log(id, quantityNumber, quantityNumber.value);
    this.onChangeQuantity.emit({maSanPham: id, soLuong: quantityNumber.value});
  }

  constructor() { }

  ngOnInit() {
  }

}
