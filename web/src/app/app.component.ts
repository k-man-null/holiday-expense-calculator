import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ExpenseService } from './services/expense.service';
import { Expense } from './models/expense';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = ['name', 'amount'];
  dataSource!: MatTableDataSource<any>

  constructor(private dialog: MatDialog, private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.getExpenseList();
  }

  openDialogToAddExpense() {
    const dialogRef = this.dialog.open(AddExpenseComponent);
    dialogRef.afterClosed().subscribe(

      value => value ? this.getExpenseList() : ""

    )
  }

  getExpenseList(): void {
    this.expenseService.getExpenses().subscribe(
       {
        next: (expenses) => {
          this.dataSource = new MatTableDataSource(expenses);
        },
        error: console.log
       }
    );
}


}
