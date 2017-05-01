
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipiesComponent } from "app/recipies/recipies.component";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { AppComponent } from "app/app.component";
import { RecipeDetailComponent } from "app/recipies/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "app/recipies/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "app/recipies/recipe-edit/recipe-edit.component";
import { SigninComponent } from "app/auth/signin/signin.component";
import { SignupComponent } from "app/auth/signup/signup.component";
import { AuthGuard } from "app/auth/auth-guard.service";


const appRoutes: Routes =[
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipiesComponent, children:[
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
  ]},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}