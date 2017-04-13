import { Component, OnInit } from '@angular/core';

import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[] = [
    new Recipe('Chicken soap', 'Delicious chicken soap', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
    new Recipe('Spagheti', 'Delicious spagheti', 'http://media.dish.allrecipes.com/wp-content/uploads/2015/07/795486_Beef-Stroganoff-III_Photo-by-abapplez-resize.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
