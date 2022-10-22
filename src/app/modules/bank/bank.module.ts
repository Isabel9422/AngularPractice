import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankRoutingModule } from './bank-routing.module';
import { BankPageComponent } from './bank-page/bank-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BankPageComponent
  ],
  imports: [
    CommonModule,
    BankRoutingModule,
    SharedModule
  ]
})
export class BankModule { }
