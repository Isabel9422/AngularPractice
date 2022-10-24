import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient) { }

  getAccounts():Observable<any>{
    return this.http.get('assets/accountsList.json').pipe(
      map(({ data }: any) => {
        return data
      }))
  }
  getDetails():Observable<any>{
    return this.http.get('assets/id.json').pipe(
      map(({ data }: any) => {
        return data
      }))
    }
    getTransactions():Observable<any>{
      return this.http.get('assets/transactions.json').pipe(
        map(({ data }: any) => {
          return data
        }))
      }
}
