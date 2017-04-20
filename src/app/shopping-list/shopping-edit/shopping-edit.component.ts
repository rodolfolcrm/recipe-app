import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAdd(){
    //this.addItemEvent.emit(new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value));
    this.shoppingListService.addIngredient(new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value));
  }

  onRemove(itemName: string, itemAmount: number){
    //this.removeItemEvent.emit(new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value));
    this.shoppingListService.removeIngredient(new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value));
  }

  onClear(){
   this.nameInputRef.nativeElement.value = null;
   this.nameInputRef.nativeElement.value = null;
  }

}
