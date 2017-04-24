import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Recipe } from "app/recipies/recipe.model";
import { RecipeService } from "app/recipies/recipe.service";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe;
  id: number;
  editMode = false;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("recipe-edit");
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;

        console.log("editMode=" + this.editMode);
        if(this.editMode){
          this.recipe = this.recipeService.getRecipe(this.id);
        }else{
          
        }          
      }
    );
  }

}
