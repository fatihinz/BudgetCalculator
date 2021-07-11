import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import {UpdateEvent} from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0 ;
  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem){
    this.budgetItems.push(newItem);
    this.totalBudget +=newItem.amount;
  }

  deleteItem(item: BudgetItem){
    let index= this.budgetItems.indexOf(item);
    this.totalBudget -=item.amount;

    this.budgetItems.splice(index,1);
  }

  updateItem(UpdateEvent:UpdateEvent){
     this.budgetItems[this.budgetItems.indexOf(UpdateEvent.old)]=UpdateEvent.new;

     //update total budget
     this.totalBudget -= UpdateEvent.old.amount;
     this.totalBudget += UpdateEvent.new.amount;
  }
}
