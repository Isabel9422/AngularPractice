import { Country } from "./enums/country";

export class Account{
    name:string;
    iban:number;
    swiftCode:string;
    balance:number;
    country:Country;

    constructor(name:string, iban:number, swiftCode:string, country:Country, balance:number){
        this.name = name;
        this.iban = iban,
        this.swiftCode = swiftCode;
        this.country = country;
        this.balance = balance;
    }

	public getName():string {
		return this.name;
	}

	public setName(name:string) {
		this.name = name;
	}

	public getiban():number {
		return this.iban;
	}

	public setiban(iban:number) {
		this.iban = iban;
	}

	public getSwiftCode():string {
		return this.swiftCode;
	}

	public setSwiftCode(swiftCode:string) {
		this.swiftCode = swiftCode;
	}

	public getCountry():string {
		return this.country;
	}

	public setCountry(iban:number) {
		this.iban = iban;
	}

    public getBalance():number {
		return this.balance;
	}

	public setBalance(balance:number) {
		this.balance = balance;
	}


 }