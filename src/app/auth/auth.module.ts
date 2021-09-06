import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


import { SigninComponent } from "app/auth/signin/signin.component";
import { SignupComponent } from "app/auth/signup/signup.component";
import { AuthRoutingModule } from "app/auth/auth.routing.module";

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class AuthModule{

}