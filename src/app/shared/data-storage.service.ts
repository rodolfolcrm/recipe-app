import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Response } from "@angular/http";

import { RecipeService } from "app/recipies/recipe.service";
import { Recipe } from "app/recipies/recipe.model";

import 'rxjs/Rx';

@Injectable()
export class DataStorageService {

    constructor(private http: Http, private recipeService: RecipeService) { };

    storeRecipes() {
        return this.http.put('https://ng-recipe-book-e06c1.firebaseio.com/recipes.json', this.recipeService.getRecipies());
    }

    fetchRecipies() {
        this.http.get('https://ng-recipe-book-e06c1.firebaseio.com/recipes.json')
            .map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        console.log(recipe);
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
            )
            .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
            );
    }
}