import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from "../recipe.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { RecipeService } from "app/recipies/recipe.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  index: number;

  constructor(private recipeService: RecipeService, 
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit() {
    //this.route.snapshot.params['id'];
    //this.recipe = this.recipeService.getRecipe(this.route.snapshot.params['id']);

    this.route.params.subscribe(
      (params: Params) => {
        this.index= +params['id'];
        this.recipe = this.recipeService.getRecipe(this.index);
      }
    );
  }

  onAddtoShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
