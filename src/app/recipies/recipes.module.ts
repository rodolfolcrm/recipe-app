import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { RecipiesComponent } from "app/recipies/recipies.component";
import { RecipeStartComponent } from "app/recipies/recipe-start/recipe-start.component";
import { RecipeListComponent } from "app/recipies/recipe-list/recipe-list.component";
import { RecipeEditComponent } from "app/recipies/recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "app/recipies/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "app/recipies/recipe-list/recipe-item/recipe-item.component";
import { RecipesRoutingModule } from "app/recipies/recipes-routing.module";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
    declarations:[
        RecipiesComponent,
        RecipeStartComponent,
        RecipeListComponent,
        RecipeEditComponent,
        RecipeDetailComponent,
        RecipeItemComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule
    ]
})
export class RecipesModule{

}