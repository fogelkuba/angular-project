import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";

@Injectable()
export class DataStorageService {
    constructor (private http: Http, private recipeService: RecipeService) {}

    private url = 'https://ng-recipe-book-f046d.firebaseio.com/';

    storeRecipes() {
        return this.http.put(this.url + 'recipes.json', this.recipeService.getRecipes());
    }

    fetchRecipes() {
        return this.http.get(this.url + 'recipes.json')
            .subscribe(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();
                    this.recipeService.setRecipes(recipes)
                }
            )
    }
}