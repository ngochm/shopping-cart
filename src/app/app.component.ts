import { ProductService } from './product.service';
import { Component } from '@angular/core';
import { Product } from './product';
import { Alert } from 'selenium-webdriver';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-cart';
  totalItems: number;

  subTotal: number;
  tax: number;
  discount: number = 0;
  total: number;

  promotions: string[] = ['Ngochm', 'Hatt', 'Khanhlm'];

  products: Product[];

  constructor(public productService: ProductService) {
    this.products = productService.products;
  }

  removeProduct(id: number) {
    // const index = this.products.findIndex(product => product.id === id);
    // const namePro = this.products[index].name;
    // if (index !== -1) {
    //   this.products.splice(index, 1);
    // }
    // console.log('Đã xóa sản phẩm: ' + namePro);
    this.productService.removeProduct(id);
    this.calculateTongSoLuongSanPham();
  }

  xuLyKhiChangeQuantity(obj: { maSanPham: number; soLuong: number }) {
    // const index = this.products.findIndex(product => product.id === obj.maSanPham);
    // if (index !== -1) {
    //   this.products[index].quantity = obj.soLuong;
    // }
    // console.log( 'Sản phẩm mã ' + obj.maSanPham + ' vừa nhập số lượng ' + obj.soLuong);
    this.productService.changeQuantity(obj.maSanPham, obj.soLuong);
    this.calculateTongSoLuongSanPham();
  }

  calculateTongSoLuongSanPham() {
    this.totalItems = 0;
    this.subTotal = 0;
    this.tax = 0;
    this.total = 0;

    if (this.products.length <= 0) {
      return;
    }
    for (const element of this.products) {
      this.totalItems += +element.quantity;
      this.subTotal += (Number(element.price) * Number(element.quantity));
    }

    this.tax = Number('0.1') * this.subTotal;
    this.total = this.subTotal + this.tax - this.discount;
  }

  enterPromo(promocode: string) {
    this.discount = 0;
    if (promocode.length > 0) {
      for (const element of this.promotions) {
        if (element === promocode) {
          this.discount = 5000000;
          break;
        }
      }
    }
    console.log('Đã được trừ 5 triệu với mã: ' + promocode);
    this.calculateTongSoLuongSanPham();

    if(this.discount === 0){
      alert ('Mã khuyến mại không hợp lệ!');
    }
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.calculateTongSoLuongSanPham();
  }
}
