import { Component, Input, OnInit } from '@angular/core';
import { Account } from 'src/app/core/models/Account';
import { Transaction } from '../../../core/models/Transaction';
import { Country } from 'src/app/core/enums/country';
import { TransactionType } from 'src/app/core/enums/TransactionType';
import { BankService } from '../services/bank.service';

import { Details } from 'src/app/core/models/Details';

@Component({
  selector: 'app-bank-page',
  templateUrl: './bank-page.component.html',
  styleUrls: ['./bank-page.component.css']
})
export class BankPageComponent implements OnInit {

  @Input() transactionsList:Array<Transaction> = [
  ]
  accountsList:Array<Account> = [
  ]
  DetailsList:Array<Details> = [
  ]
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }

  accounts:Array<Account>= new Array();
  hidden1:string = 'flex'
  hidden2:string = 'none'
  hidden3:string = 'none'
  hidden4:string = 'none'
  hidden5:string = 'none'
  hidden6:string = 'none'
  hidden7:string = 'none'

  nameAccount:string=''
  nameAccountDestination:string=''
  name:string='';
  iban:string='';
  swiftCode:string='';
  country:Country=Country.ES;
  balance:number=0;
  concept:string=''
  amount:number=0
  transactionType:TransactionType=TransactionType.deposit
  transactions:Array<Transaction>= new Array();
  transaction:Transaction= new Transaction(0,TransactionType.deposit,0,new Date);
  details: Details = new Details(0,'');
  id:number=this.transactionsList.length
  idTransaction: number=2;
  sortedItems: any;

  constructor(private bankService: BankService) { }

  ngOnInit(): void {
  this.loadDataAll()
  }

  async loadDataAll(): Promise<any> {
    this.accountsList = await this.bankService.getAccounts().toPromise()
    this.DetailsList = await this.bankService.getDetails().toPromise()
    this.transactionsList = await this.bankService.getTransactions().toPromise()
    this.transactionsList.forEach(element => {
      element.createdAt = new Date(element.createdAt)   //Dates have to be converted from string to Dates, because client could want to sort them
    });
  }

  withdrawal(){
    this.accountsList.forEach(e => {
      if(e.name===this.nameAccount){
        if(this.amount<e.balance){
          e.balance-=this.amount
          this.transactionType=TransactionType.withdrawal
          this.details= new Details(this.DetailsList.length+1,this.concept)
          this.transaction = new Transaction(this.transactionsList.length+1,this.transactionType,this.amount, new Date())
          e.transactions.push(this.transaction)
          this.transactionsList.push(this.transaction)
        }else{alert('You have not enough credit in your account.')}
      }
  });
  alert('The withdrawal has been made.')
  this.resetData()
  }

  deposit(){
    this.accountsList.forEach(e => {
      if(e.name===this.nameAccount){
        e.balance+=this.amount
        this.transactionType=TransactionType.deposit
        this.details= new Details(this.DetailsList.length+1,this.concept)
        this.transaction = new Transaction(this.transactionsList.length+1,this.transactionType,this.amount, new Date())
        e.transactions.push(this.transaction)
        this.transactionsList.push(this.transaction)
      }
  });
  alert('The deposit has been credited to your account!')
  this.resetData()
  }

  showBalance(){
    this.accountsList.forEach(e => {
        if(e.name===this.nameAccount){
          this.balance=e.balance
        }
    });
  }

  transfer(){
    this.accountsList.forEach(e => {
        if(e.name===this.nameAccount){
          e.balance-=this.amount
          this.transactionType=TransactionType.transfer
          this.details= new Details(this.DetailsList.length+1,this.concept)
          this.transaction = new Transaction(this.transactionsList.length+1,this.transactionType,this.amount, new Date())
          e.transactions.push(this.transaction)
          this.transactionsList.push(this.transaction)
        }
    });
    this.accounts.forEach(e => {
      if(e.name===this.nameAccountDestination){
        e.balance+=this.amount
      }
    });
    alert('Transference accepted!')
  }

  showElements(option:number){

    switch(option){
    case 1:
    this.hidden1 = 'flex'
    this.hidden2 = this.hidden3 = this.hidden4 = this.hidden5 = this.hidden6 = this.hidden7 = 'none'
    break;

    case 2:
    this.hidden2 = 'flex'
    this.hidden1 = this.hidden3 = this.hidden4 = this.hidden5 = this.hidden6 = this.hidden7 = 'none'
    break;

    case 3:
    this.hidden3 = 'flex'
    this.hidden1 = this.hidden2 = this.hidden4 = this.hidden5 = this.hidden6 = this.hidden7 = 'none'
    break;

    case 4:
    this.hidden4 = 'flex'
    this.hidden2 = this.hidden3 = this.hidden1 = this.hidden5 = this.hidden6 = this.hidden7 = 'none'
    break;

    case 5:
    this.hidden5 = 'flex'
    this.hidden2 = this.hidden3 = this.hidden1 = this.hidden4 = this.hidden6 = this.hidden7 = 'none'
    break;

    case 6:
    this.hidden6 = 'flex'
    this.hidden2 = this.hidden3 = this.hidden1 = this.hidden4 = this.hidden5 = this.hidden7 = 'none'
    break;
    }

  }

  createAccount(){
    var account = new Account(this.name, this.iban, this.swiftCode, this.country, this.balance, this.transactions);
    this.accountsList.push(account);
    alert('Account has been created!')
    this.accountsList.forEach(e => {
      console.log(e)
    });
    this.resetData()
  }

  resetData(){
    this.name='';
    this.iban='';
    this.swiftCode='';
    this.country=Country.ES;
    this.balance=0;
    this.concept=''
    this.amount=0
  }

  showDetails(idTransaction:number){
    this.hidden7='flex'
    this.DetailsList.forEach(e => {
      if(e.transactionID===idTransaction){
        this.details = e
      }
    });
  }

  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
    console.log(this.optionSort);
  }

}
