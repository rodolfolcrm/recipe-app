import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  itemAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  itemRemoved(ingredient: Ingredient) {

  }

  onEditIngredient(index: number){
    console.log(index);
    this.shoppingListService.startEditing.next(index);
  }

    ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
