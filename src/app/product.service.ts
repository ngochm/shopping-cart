import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      img:
        'https://bachlongmobile.com/media/catalog/product/cache/1/image/040ec09b1e35df139433887a97daa66f/5/_/5_23_5.jpg',
      name: 'Iphone 11',
      desc: 'IPhone 11 - 64GB Công Ty',
      price: 19499000,
      quantity: 1
    },

    {
      id: 2,
      img:
        'https://bachlongmobile.com/media/catalog/product/cache/1/image/040ec09b1e35df139433887a97daa66f/4/_/4_31_2.jpg',
      name: 'Iphone 11 Pro Max',
      desc: 'IPhone 11 Pro MAX - 512GB Công Ty',
      price: 32799000,
      quantity: 2
    }
  ];

  removeProduct(id: number) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  changeQuantity(id: number, quantity: number) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products[index].quantity = quantity;
    }
  }


  constructor() { }
}
