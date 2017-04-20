import { Component, OnInit } from '@angular/core';

import { Recipe } from "./recipe.model";
import { RecipeService } from "app/recipies/recipe.service";

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers: [RecipeService]
})
export class RecipiesComponent implements OnInit {
  
  recipeSelected: Recipe;
  
  constructor(private recipeService: RecipeService){}

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) =>{
          this.recipeSelected = recipe;
      }
    );
  }
}
