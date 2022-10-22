import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalculatorPageComponent } from './calculatorPage/calculatorPage.component';


@NgModule({
  declarations: [
    CalculatorPageComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    SharedModule
  ]
})
export class CalculatorModule { }
