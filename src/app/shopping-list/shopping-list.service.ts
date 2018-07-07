import {Ingredient} from "../shared/ingredient.model";

export class ShoppingListService{

  private ingredientes: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Banannas', 20),
  ];

  getIngredients(){
    return this.ingredientes.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredientes.push(ingredient);
  }
}
