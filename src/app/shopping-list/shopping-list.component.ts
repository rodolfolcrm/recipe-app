import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from "app/shopping-list/shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredientsChanged: Ingredient[]) =>{
          this.ingredients = ingredientsChanged;
      }
    );
  }

  itemAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  itemRemoved(ingredient: Ingredient){

  }
}
