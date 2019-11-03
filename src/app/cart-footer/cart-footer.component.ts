import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-footer',
  templateUrl: './cart-footer.component.html',
  styleUrls: ['./cart-footer.component.css']
})
export class CartFooterComponent implements OnInit {
  @Input() subTotal: number;
  @Input() tax: number;
  @Input() discount: number;
  @Input() total: number;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onEnterPromo = new EventEmitter();

  inputPromoCode(promoCode: HTMLInputElement) {
    this.onEnterPromo.emit(promoCode.value);
  }

  constructor() {}

  ngOnInit() {}
}
