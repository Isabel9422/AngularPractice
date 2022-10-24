import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankRoutingModule } from './bank-routing.module';
import { BankPageComponent } from './bank-page/bank-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrderListPipe } from './pipe/order-list.pipe';


@NgModule({
  declarations: [
    BankPageComponent,
    OrderListPipe
  ],
  imports: [
    CommonModule,
    BankRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    BankPageComponent
  ]
})
export class BankModule { }
