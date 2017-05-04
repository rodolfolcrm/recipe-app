import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipiesComponent } from "app/recipies/recipies.component";
import { RecipeStartComponent } from "app/recipies/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "app/recipies/recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "app/recipies/recipe-detail/recipe-detail.component";
import { AuthGuard } from "app/auth/auth-guard.service";

const recipesRoutes: Routes = [
{path: '', component: RecipiesComponent, children:[
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
  ]}
];

@NgModule({
    imports: [RouterModule.forChild(recipesRoutes)],
    exports:[RouterModule]
})
export class RecipesRoutingModule{

}