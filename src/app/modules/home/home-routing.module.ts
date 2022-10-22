import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren:() => import(`../home/home.module`).then(m => m.HomeModule)
  },
  {
    path: 'calculator',
    loadChildren:() => import(`../calculator/calculator.module`).then(m => m.CalculatorModule)
  },
  {
    path: 'greeting',
    loadChildren:() => import(`../greeting/greeting.module`).then(m => m.GreetingModule)
  },
  {
    path: 'transactions',
    loadChildren:() => import(`../bank/bank.module`).then(m => m.BankModule)
  },
  {
    path: '**',//TODO 404 cuando no existe la ruta
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
