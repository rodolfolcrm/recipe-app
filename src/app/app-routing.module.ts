
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipiesComponent } from "app/recipies/recipies.component";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { AppComponent } from "app/app.component";
import { RecipeDetailComponent } from "app/recipies/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "app/recipies/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "app/recipies/recipe-edit/recipe-edit.component";


const appRoutes: Routes =[
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipiesComponent, children:[
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent}      
  ]},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}