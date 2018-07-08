import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

  private recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'campbells vegetarian pizza recipe',
      'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg',
      [
        new Ingredient('Ham', 1),
        new Ingredient('Ananas', 10)
      ]),
    new Recipe(
      'Stir-Fried Lo Mein Noodles',
      'Stir-Fried Lo Mein Noodles With Pork and Vegetables Recipe',
      'https://www.seriouseats.com/recipes/images/2017/03/Stir_Fried_Lo_Mein_20170315_3-edit-1500x1125.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Noodle', 10),
        new Ingredient('Vegetables', 5),
      ]),
  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipeSelected(){
    return this.recipeSelected;
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(id: number){
    return this.recipes[id];
  }
}
