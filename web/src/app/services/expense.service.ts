import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  expenses: Expense[] = [];
 
  constructor(private http: HttpClient) { }

  addExpense(expense: Expense) {
    this.expenses.push(expense);
  
  }

  getExpenses() : Observable<Expense[]> {
    return of(this.expenses);

  }

  settleExpenses(expenses: Expense[]): Observable<any> {
    return this.http.post('http://localhost:3000/payouts', expenses);
  }


}
