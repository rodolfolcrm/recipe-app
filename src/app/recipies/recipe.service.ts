import { Injectable } from "@angular/core";

import { Recipe } from "app/recipies/recipe.model";
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>()

    constructor(private shoppingListService: ShoppingListService) { }

    setRecipes(recipes: Recipe[]) {
        this.recipies = recipes;
        this.recipesChanged.next(this.recipies.slice());
    }

    private recipies: Recipe[] = [
        new Recipe('Chicken soap',
            'Delicious chicken soap',
            'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
            [new Ingredient('Chicken', 1),
            new Ingredient('Tomato', 3)]),

        new Recipe('Spagheti',
            'Delicious spagheti',
            'https://i.kinja-img.com/gawker-media/image/upload/s--ZPatPSbC--/c_scale,f_auto,fl_progressive,q_80,w_800/ikozhddomny27gnqpop4.jpg',
            [new Ingredient('Spagheti', 5),
            new Ingredient('Tomato', 1)])
    ];

    getRecipies() {
        return this.recipies.slice();
    }

    getRecipe(index: number): Recipe {
        return this.recipies[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipies.push(recipe);
        this.recipesChanged.next(this.recipies.slice());
    }

    updateRecipe(id: number, recipe: Recipe) {
        this.recipies[id] = recipe;
        this.recipesChanged.next(this.recipies.slice());
    }

    removeRecipe(id: number) {
        this.recipies.splice(id, 1);
        this.recipesChanged.next(this.recipies.slice());
    }

}