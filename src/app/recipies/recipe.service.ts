import { Injectable } from "@angular/core";

import { Recipe } from "app/recipies/recipe.model";
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    constructor(private shoppingListService: ShoppingListService) { }

    private recipies: Recipe[] = [
        new Recipe('Chicken soap',
            'Delicious chicken soap',
            'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
            [new Ingredient('Chicken', 1),
            new Ingredient('Tomato', 3)]),

        new Recipe('Spagheti',
            'Delicious spagheti',
            'http://media.dish.allrecipes.com/wp-content/uploads/2015/07/795486_Beef-Stroganoff-III_Photo-by-abapplez-resize.jpg',
            [new Ingredient('Spagheti', 5),
            new Ingredient('Tomato', 1)])
    ];

    getRecipies() {
        return this.recipies.slice();
    }

    getRecipe(index: number): Recipe{
        return this.recipies[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}