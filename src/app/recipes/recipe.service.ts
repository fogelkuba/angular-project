import {Recipe} from "./recipe.model";

export class RecipeService{
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
}
