import { Component, OnInit } from '@angular/core';

import * as firebase from "firebase/app";
import 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyBP2dXzt2Dm-Lsjx_HoA0z43Th0CDYxxt8",
      authDomain: "ng-recipe-book-e06c1.firebaseapp.com"
    });
  }

  currentPage: String = 'recipies';

  onNavegateEvent(page: String) {
    this.currentPage = page;
  }
}
