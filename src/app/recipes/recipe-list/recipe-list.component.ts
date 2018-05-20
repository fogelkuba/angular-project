import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'campbells vegetarian pizza recipe',
      'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg'),
    new Recipe(
      'Stir-Fried Lo Mein Noodles',
      'Stir-Fried Lo Mein Noodles With Pork and Vegetables Recipe',
      'https://www.seriouseats.com/recipes/images/2017/03/Stir_Fried_Lo_Mein_20170315_3-edit-1500x1125.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
