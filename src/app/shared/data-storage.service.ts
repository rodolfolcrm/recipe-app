import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Response } from "@angular/http";

import { RecipeService } from "app/recipies/recipe.service";
import { Recipe } from "app/recipies/recipe.model";

import 'rxjs/Rx';
import { AuthService } from "app/auth/auth.service";

@Injectable()
export class DataStorageService {

    constructor(private http: Http, 
    private recipeService: RecipeService,
    private authService: AuthService) { };

    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://ng-recipe-book-e06c1.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipies());
    }

    fetchRecipies() {
        const token = this.authService.getToken();

        this.http.get('https://ng-recipe-book-e06c1.firebaseio.com/recipes.json?auth=' + token)
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