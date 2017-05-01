import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import * as firebase from 'firebase';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router){}

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
            error => console.log(error)
            )
    }

    signinUser(email: string, password: string) {
        console.log("signinUser");
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
            response => {
                console.log(response);
                this.router.navigate(['/']);

                firebase.auth().currentUser.getToken()
                    .then(
                        (token: string) => {
                            this.token = token;                            
                        }
                    )
            }
            )
            .catch(
            error => console.log(error)
            )
    }

    logout(){
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/']);
    }

    getToken() {
        firebase.auth().currentUser.getToken()
            .then(
            (token: string) => this.token = token
            )        
        return this.token;
    }

    isAuthenticated(){
        return this.token != null;
    }
}