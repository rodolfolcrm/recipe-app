import { Component, OnInit} from '@angular/core';

import { Recipe } from '../recipe.model'
import { RecipeService } from "app/recipies/recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[];

  constructor(private recipeService:RecipeService){}

  ngOnInit() {
    this.recipies = this.recipeService.getRecipies();
  }
}
