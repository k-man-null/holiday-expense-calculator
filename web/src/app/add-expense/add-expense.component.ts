import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExpenseService } from '../services/expense.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {

  expenseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private expenseService: ExpenseService,
    private dialogRef: MatDialogRef<AddExpenseComponent>) {
    this.expenseForm = this.fb.group({
      name: '',
      amount: 0
    })
  }

  
  onSubmitExpense() {
    if (this.expenseForm.valid) {
      this.expenseService.addExpense(this.expenseForm.value);
      alert('Expense added');
      this.dialogRef.close(true);
      
    }
  }

}
