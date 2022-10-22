import { Component, OnInit } from '@angular/core';
import { Account } from './Account';
import { Country } from './enums/country';

@Component({
  selector: 'app-bank-page',
  templateUrl: './bank-page.component.html',
  styleUrls: ['./bank-page.component.css']
})
export class BankPageComponent implements OnInit {

  accounts:Array<Account>= new Array();
  hidden1:string = 'none'
  hidden2:string = 'none'
  hidden3:string = 'flex'
  hidden4:string = 'none'

  constructor() { }

  ngOnInit(): void {
  }


  withdrawal(amount:number){
  }

  deposit(nameAccount:string, amount:number){
    this.accounts.forEach(e => {
      if(e.name===nameAccount){
        console.log(e.balance)
      }
  });
  }

  showBalance(nameAccount:string){
    this.accounts.forEach(e => {
        if(e.name===nameAccount){
          console.log(e.balance)
        }
    });
  }

  showElements(option:number){

    switch(option){
    case 1:
    this.hidden1 = 'flex'
    this.hidden2 = this.hidden3 = this.hidden4 = 'none'
    break;

    case 2:
    this.hidden2 = 'flex'
    this.hidden1 = this.hidden3 = this.hidden4 = 'none'
    break;

    case 3:
    this.hidden3 = 'flex'
    this.hidden1 = this.hidden2 = this.hidden4 = 'none'
    break;

    case 4:
    this.hidden4 = 'flex'
    this.hidden2 = this.hidden3 = this.hidden1 = 'none'
    break;
    }

  }

  createAccount(name:string, iban:number, swiftCode:string, country:Country, balance:number){
    var account = new Account(name, iban, swiftCode, country, balance);
    this.accounts.push(account);
  }

}
