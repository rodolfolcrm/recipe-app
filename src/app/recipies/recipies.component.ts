import { Component, OnInit } from '@angular/core';

import { Recipe } from "./recipe.model";

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {
  recipeSelected: Recipe;
  constructor() { }

  ngOnInit() {
  }
}
