import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreetingPageComponent } from './greetingPage/greetingPage.component';

const routes: Routes = [
  {
    path: '',
    component: GreetingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GreetingRoutingModule { }
