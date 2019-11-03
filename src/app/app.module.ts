import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartHeaderComponent } from './cart-header/cart-header.component';
import { CartBodyComponent } from './cart-body/cart-body.component';
import { CartFooterComponent } from './cart-footer/cart-footer.component';
import {registerLocaleData} from '@angular/common';
import localeVi from '@angular/common/locales/vi';
//import localeViExtra from '@angular/common/locales/extra/vi';

registerLocaleData(localeVi, 'VN');

@NgModule({
  declarations: [
    AppComponent,
    CartHeaderComponent,
    CartBodyComponent,
    CartFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
