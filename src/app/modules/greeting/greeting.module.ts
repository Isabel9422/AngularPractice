import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreetingRoutingModule } from './greeting-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { GreetingPageComponent } from './greetingPage/greetingPage.component';


@NgModule({
  declarations: [
    GreetingPageComponent,
  ],
  imports: [
    CommonModule,
    GreetingRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class GreetingModule { }
