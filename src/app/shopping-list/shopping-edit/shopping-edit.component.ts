import { Component, OnInit, ViewChild } from '@angular/core';

import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {  
  @ViewChild('f', { static: true }) slForm: NgForm;
  

  editMode = false;
  editeditemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListService.startEditing.subscribe(
      (index:number) => {
        this.editMode = true;
        this.editeditemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }

  onSubmit(f: NgForm){
    const name = f.value.name;
    const amount = f.value.amount;
    console.log("name:" + name);
    console.log("amount:" + amount);

    if(!this.editMode){
      this.shoppingListService.addIngredient(new Ingredient(name, amount));
    }else{
      this.shoppingListService.updateIngredient(this.editeditemIndex, new Ingredient(name, amount));
    }

    this.onClear();   
  }

  onDelete(){
    this.shoppingListService.removeIngredient(this.editeditemIndex);
    this.onClear();
  }

  onClear(){
    this.editMode = false;
    this.slForm.reset();
  }

}
