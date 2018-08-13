import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";

@Injectable()
export class DataStorageService {
    constructor (private http: Http, private recipeService: RecipeService) {}

    private url = 'https://ng-recipe-book-f046d.firebaseio.com/';

    storeRecipes() {
        this.http.put(this.url + 'recipes/json', this.recipeService.getRecipes());
    }
}