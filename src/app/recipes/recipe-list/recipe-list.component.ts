import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'test description',
      'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
