import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ExpenseService } from './services/expense.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web';

  constructor(private dialog: MatDialog, private expenseService: ExpenseService){}
  
  ngOnInit(): void {
    this.getExpenseList();
  }

  openDialogToAddExpense() {
    this.dialog.open(AddExpenseComponent);
  }

  getExpenseList() {
    this.expenseService.getExpenses().subscribe({
      next: (result) => {
        console.log(result);
      },
      error: console.log,
    })
  }
  

}
