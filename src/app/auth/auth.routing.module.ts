import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SigninComponent } from "app/auth/signin/signin.component";
import { SignupComponent } from "app/auth/signup/signup.component";

const authRoutes = [
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent}
]

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports:[RouterModule]
})
export class AuthRoutingModule{

}