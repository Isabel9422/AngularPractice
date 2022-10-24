import { TransactionType } from "../enums/TransactionType";

export class Transaction{
    id:number;
    type:TransactionType;
    amount:number;
    createdAt: Date;

    constructor(id:number, type:TransactionType, amount:number, createdAt:Date){
        this.id = id;
        this.type = type,
        this.amount = amount;
        this.createdAt = createdAt;
    }

    
}