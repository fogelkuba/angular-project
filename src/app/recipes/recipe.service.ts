import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService{

  private recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'campbells vegetarian pizza recipe',
      'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg'),
    new Recipe(
      'Stir-Fried Lo Mein Noodles',
      'Stir-Fried Lo Mein Noodles With Pork and Vegetables Recipe',
      'https://www.seriouseats.com/recipes/images/2017/03/Stir_Fried_Lo_Mein_20170315_3-edit-1500x1125.jpg')
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipeSelected(){
    return this.recipeSelected;
  }
}
