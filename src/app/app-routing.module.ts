
import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { AppComponent } from "app/app.component";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { HomeComponent } from "app/core/home/home.component";
import { AuthGuard } from "app/auth/auth-guard.service";


const appRoutes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren: './recipies/recipes.module#RecipesModule', canLoad:[AuthGuard]},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule{

}