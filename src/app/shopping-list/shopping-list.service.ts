import { EventEmitter } from "@angular/core";

import { Ingredient } from "app/shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 3)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(... ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    removeIngredient(ingredient: Ingredient) {

    }

}