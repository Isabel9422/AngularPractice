import { Country } from "../enums/country";
import { Transaction } from "./Transaction";

export class Account{
    name:string;
    iban:string;
    swiftCode:string;
    balance:number;
    country:Country;
	transactions:Array<Transaction>;

    constructor(name:string, iban:string, swiftCode:string, country:Country, balance:number, transactions:Array<Transaction>){
        this.name = name;
        this.iban = iban,
        this.swiftCode = swiftCode;
        this.country = country;
        this.balance = balance;
		this.transactions = transactions;
    }
 }