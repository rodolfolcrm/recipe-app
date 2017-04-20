import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from "../recipe.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { RecipeService } from "app/recipies/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() public recipe: Recipe;

  constructor(private recipeService: RecipeService){}

  ngOnInit() {
  }

  onAddtoShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
