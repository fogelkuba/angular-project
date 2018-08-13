import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs/index";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    // private recipeSelected = new EventEmitter<Recipe>();
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
        new Recipe(
            'Beef Tacos',
            'All American Beef Tacos',
            'http://www.fnstatic.co.uk/images/content/recipe/beef-tacos.jpg',
            [
                new Ingredient('Beef', 4),
                new Ingredient('Bread', 2),
                new Ingredient('Vegetables', 1),
            ]),
    ];

    constructor(private shoppingListService: ShoppingListService) {
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipeSelected() {
        // return this.recipeSelected;
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
}
